'use strict';

const shell = require('shelljs');
const chalk = require('chalk');
shell.set('-v');

console.log(chalk.cyan('Bumping Prettier...'));
shell.cd('prettier');
shell.exec('git checkout master');
shell.exec('git pull https://github.com/prettier/prettier master');
console.log(chalk.cyan('Rebasing, this might fail:'));
shell.exec('git rebase master lenient');
