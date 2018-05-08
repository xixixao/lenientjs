'use strict';

const {info, shell} = require('./shell');

const dest = '../atom-lenientjs/dependencies';

info('Building prettier...');
shell.cd('prettier');

shell.exec('yarn rollup -c scripts/build/rollup.index.config.js');
shell.cp('dist/index.js', dest + '/prettier.js');

shell.exec('yarn rollup -c scripts/build/rollup.third-party.config.js');
shell.cp('dist/third-party.js', dest);
shell.cd('..');
