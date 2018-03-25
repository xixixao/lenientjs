'use strict';

const shell = require('shelljs');
const chalk = require('chalk');
shell.set('-v');

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
shell.ln('-sf', '../../babel/packages/babylon', 'node_modules/babylon-lenient');
shell.cd('..');

console.log(chalk.cyan('Cloning website...'));
shell.exec('git clone https://github.com/xixixao/lenientjs.git website');
shell.cd('website');
shell.exec('git checkout website');
shell.exec('yarn');
shell.cd('..');

console.log(chalk.cyan('\nAll set up!'));
