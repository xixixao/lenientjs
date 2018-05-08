'use strict';

const {info, shell} = require('./shell');

info('Bumping Prettier...');
shell.cd('prettier');
shell.exec('git checkout master');
shell.exec('git pull https://github.com/prettier/prettier master');
info('Rebasing, this might fail:');
shell.exec('git rebase master lenient');
