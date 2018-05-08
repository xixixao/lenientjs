'use strict';

const {info, shell} = require('./shell');

info('Building babylon...');
shell.cd('babel');
shell.exec('yarn gulp build-babylon');
shell.cd('../prettier');
shell.ln('-fs', '../../babel/packages/babylon', 'node_modules/babylon-lenient');
shell.exec(
  'yarn rollup -c scripts/build/rollup.parser.config.js ' +
    '--environment parser:language-js/parser-babylon',
);
shell.cp('dist/parser-babylon.js', '../atom-lenientjs/dependencies');
shell.cd('..');
