'use strict';

const chalk = require('chalk');
const shell = require('shelljs');

shell.config.verbose = true;

console.log(chalk.cyan('Copying syntax...'));
shell.cd('language-babel');

shell.cp(
  'grammars/Babel Language.json',
  '../atom-lenientjs/grammars/lenientjs-language.json',
);
