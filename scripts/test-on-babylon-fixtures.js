// This will walk over all tests in babylon's suite and convert them from
// JS to Lenient and back.
//
// This doesn't guarantee that the Lenient version is perfect, but it's a
// pretty good approximation.

const expect = require('expect');
const {chalk, confirm, info, log, shell} = require('./shell');
const {babylonOptions, prettierOptions} = require('./transpileConfig');

info('finding files');

const PRETTIER = require('../prettier');
const BABYLON = require('../babel/packages/babylon');

const NUM_TO_SKIP = process.argv[2] || 0;
const STOP_AFTER_FAILURE = process.argv[3];

const fileNames = shell.ls('./babel/packages/babylon/test/fixtures/**/*.js');
shell.config.verbose = false;

let numSkipped = 0;
let numSucceeded = 0;
let numFailed = 0;
let numChecked = 0;

const runInfo = () => {
  log();
  info(`Number of tests: ${numSkipped + numSucceeded + numFailed}`);
  info(`Number of tests succeeded: ${numSucceeded}`);
  info(`Number of tests failed: ${numFailed}`);
};

for (const fileName of fileNames) {
  if (numSkipped + numSucceeded + numFailed <= NUM_TO_SKIP) {
    numSkipped++;
    continue;
  }
  let failed = false;
  try {
    const unformattedJSCode = shell.cat(fileName).toString();
    let jsCode;
    try {
      jsCode = PRETTIER.format(unformattedJSCode, {
        ...prettierOptions,
        bracketSpacing: false,
        lenient: false,
        semi: true,
        parser: text => BABYLON.parse(text, babylonOptions),
      });
    } catch (e) {
      // Syntax error example, not useful to us
      continue;
    }
    shell.echo('-n', '.');
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
    numSucceeded++;
  } catch (e) {
    numFailed++;
    if (STOP_AFTER_FAILURE) {
      log();
      info(fileName);
      log(e.message);
      log(chalk.keyword('lightgray')(e.stack));
      runInfo();
      if (!confirm('Continue?')) {
        break;
      }
    }
  }
}
runInfo();
