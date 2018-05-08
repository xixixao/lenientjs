'use strict';

const {info, shell} = require('./shell');

info('Copying syntax...');
shell.cd('language-babel');

shell.cp(
  'grammars/Babel Language.json',
  '../atom-lenientjs/grammars/lenientjs-language.json',
);
shell.cd('..');
