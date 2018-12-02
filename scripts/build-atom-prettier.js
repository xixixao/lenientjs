'use strict';

const {info, shell} = require('./shell');

const dest = '../atom-lenientjs/dependencies';

info('Building prettier...');
shell.cd('prettier');
shell.exec('node ./scripts/build/build.js -- standalone');
shell.cp('dist/standalone.js', dest + '/prettier.js');
shell.cd('..');
