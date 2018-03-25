'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

shell.config.verbose = true;

console.log(chalk.cyan('Cloning babel...'));
shell.exec('git clone https://github.com/xixixao/babel.git');
shell.cd('babel');
shell.exec('git checkout lenient');
shell.exec('make bootstrap');
shell.cd('..');

console.log(chalk.cyan('Cloning prettier...'));
shell.exec('git clone https://github.com/xixixao/prettier.git');
shell.cd('prettier');
shell.exec('git checkout lenient');
shell.exec('yarn');
shell.cd('..');

console.log(chalk.cyan('Cloning website...'));
shell.exec('git clone https://github.com/xixixao/lenientjs.git website');
shell.cd('website');
shell.exec('git checkout website');
shell.exec('yarn');
shell.cd('..');

console.log(chalk.cyan('\nAll setup!'));
