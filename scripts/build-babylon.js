'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

console.log(chalk.cyan('Building babylon...'));
shell.config.verbose = true;

shell.cd('../babel');
shell.exec('gulp build-babylon');
shell.cd('../prettier');
shell.ln('-fs', '../../babel/packages/babylon', 'node_modules/babylon-lenient');
shell.exec(
  'rollup -c scripts/build/rollup.parser.config.js ' +
    '--environment parser:language-js/parser-babylon',
);
shell.exec(
  'rollup -c scripts/build/rollup.docs.config.js ' +
    '--environment filepath:parser-babylon.js -i dist/parser-babylon.js',
);
shell.cp(
  'website/static/lib/parser-babylon.js',
  '../website/public/prettier/lib/',
);
