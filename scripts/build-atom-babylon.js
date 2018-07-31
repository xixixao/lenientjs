'use strict';

const {info, shell} = require('./shell');

info('Building babylon...');
shell.cd('babel');
shell.exec('yarn gulp build-babylon');
shell.cd('../prettier');
shell.ln('-fs', '../../babel/packages/babylon', 'node_modules/babylon-lenient');
shell.exec('node ./scripts/build/build.js -- parser-babylon');
shell.cp('dist/parser-babylon.js', '../atom-lenientjs/dependencies');
shell.cd('..');
