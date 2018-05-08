'use strict';

const {info, shell} = require('./shell');

info('Bumping Babylon...');
shell.cd('babel');
shell.exec('git checkout master');
shell.exec('git pull https://github.com/babel/babel master');
info('Rebasing, this might fail:');
shell.exec('git rebase master lenient');
