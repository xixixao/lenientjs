'use strict';

const chalk = require('chalk');
const shell = require('shelljs');

shell.set('-v');

const clone = repo =>
  shell.exec(`git clone ${repo} --shallow-since=2018-01-01 --no-single-branch`);

console.log(chalk.cyan('Cloning babel...'));
clone('https://github.com/xixixao/babel.git');
shell.cd('babel');
shell.exec('git checkout lenient');
shell.exec('make bootstrap');
shell.cd('..');

console.log(chalk.cyan('Cloning prettier...'));
clone('https://github.com/xixixao/prettier.git');
shell.cd('prettier');
shell.exec('git checkout lenient');
shell.exec('yarn');
shell.ln('-sf', '../../babel/packages/babylon', 'node_modules/babylon-lenient');
shell.cd('..');

console.log(chalk.cyan('Cloning atom-lenientjs...'));
clone('https://github.com/xixixao/atom-lenientjs.git');

console.log(chalk.cyan('Cloning language-babel...'));
clone('https://github.com/xixixao/language-babel');
shell.cd('language-babel');
shell.exec('git checkout lenient');
shell.cd('..');

console.log(chalk.cyan('Cloning website...'));
clone('https://github.com/xixixao/lenientjs.git website');
shell.cd('website');
shell.exec('git checkout website');
shell.exec('yarn');
shell.cd('..');

console.log(chalk.cyan('\nAll set up!'));
