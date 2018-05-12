'use strict';

const {info, shell, today} = require('./shell');

const backup_branch = `lenient-backup-${today}`;

info('Bumping Prettier...');
shell.cd('prettier');
shell.exec('git branch ' + backup_branch);
shell.exec('git fetch https://github.com/prettier/prettier master');
shell.exec('git reset --hard FETCH_HEAD');
info('Rebasing, this might fail:');
shell.exec('git merge ' + backup_branch);
