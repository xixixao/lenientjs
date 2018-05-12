// This will walk over all tests in babylon's suite and convert them from
// JS to Lenient and back.
//
// This doesn't guarantee that the Lenient version is perfect, but it's a
// pretty good approximation.

const expect = require('expect');
const {chalk, confirm, info, log, shell} = require('./shell');
const {babylonOptions, prettierOptions} = require('./transpileConfig');

info('finding files');

const STABLE_BABYLON = require('babylon');
const PRETTIER = require('../prettier');
const BABYLON = require('../babel/packages/babylon');

const NUM_TO_SKIP = process.argv[2] || 0;
const STOP_AFTER_FAILURE = process.argv[3];

const fileNames = shell.ls('./babel/packages/babylon/test/fixtures/**/*.js');
shell.config.verbose = false;

let numSkipped = 0;
let numInvalid = 0;
let numSucceeded = 0;
let numFailed = 0;
let stopped = false;

const runInfo = () => {
  log();
  info(
    `Number of tests: ${numSkipped + numInvalid + numSucceeded + numFailed}`,
  );
  info(`Number of tests succeeded: ${numSucceeded}`);
  info(`Number of tests failed: ${numFailed}`);
};

for (const fileName of fileNames) {
  if (numSkipped < NUM_TO_SKIP) {
    numSkipped++;
    continue;
  }
  try {
    const unformattedJSCode = shell.cat(fileName).toString();
    let jsCode;
    try {
      STABLE_BABYLON.parse(unformattedJSCode, babylonOptions);
    } catch (e) {
      // Syntax error example, not useful to us
      numInvalid++;
      continue;
    }
    jsCode = PRETTIER.format(unformattedJSCode, {
      ...prettierOptions,
      bracketSpacing: false,
      lenient: false,
      semi: true,
      parser: text => BABYLON.parse(text, babylonOptions),
    });
    const lenientCode = PRETTIER.format(jsCode, {
      ...prettierOptions,
      bracketSpacing: false,
      lenient: true,
      semi: false,
      parser: text => BABYLON.parse(text, babylonOptions),
    });
    const newJSCode = PRETTIER.format(lenientCode, {
      ...prettierOptions,
      bracketSpacing: false,
      lenient: false,
      semi: true,
      parser: text =>
        BABYLON.parse(text, {
          ...babylonOptions,
          plugins: [...babylonOptions.plugins, 'lenient'],
        }),
    });
    expect(newJSCode).toBe(jsCode);
    shell.echo('-n', '.');
    numSucceeded++;
  } catch (e) {
    numFailed++;
    if (!STOP_AFTER_FAILURE) {
      shell.echo('-n', chalk.red('.'));
    } else {
      log();
      info(fileName);
      log(chalk.keyword('lightgray')(e.stack));
      runInfo();
      if (!confirm('Continue?')) {
        stopped = true;
        break;
      }
    }
  }
}
if (!stopped) {
  runInfo();
}
