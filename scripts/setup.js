'use strict';

const {info, shell} = require('./shell');

const clone = repo =>
  shell.exec(`git clone ${repo} --shallow-since=2018-01-01 --no-single-branch`);

info('Cloning babel...');
clone('https://github.com/xixixao/babel.git');
shell.cd('babel');
shell.exec('git checkout lenient');
shell.exec('make bootstrap');
shell.cd('..');

info('Cloning prettier...');
clone('https://github.com/xixixao/prettier.git');
shell.cd('prettier');
shell.exec('git checkout lenient');
shell.exec('yarn');
shell.ln('-sf', '../../babel/packages/babylon', 'node_modules/babylon-lenient');
shell.cd('..');

info('Cloning atom-lenientjs...');
clone('https://github.com/xixixao/atom-lenientjs.git');

info('Cloning language-babel...');
clone('https://github.com/xixixao/language-babel.git');
shell.cd('language-babel');
shell.exec('git checkout lenient');
shell.cd('..');

info('Cloning website...');
clone('https://github.com/xixixao/lenientjs.git website');
shell.cd('website');
shell.exec('git checkout website');
shell.exec('yarn');
shell.cd('..');

info('\nAll set up!');
