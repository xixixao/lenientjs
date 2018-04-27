'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

console.log(chalk.cyan('Building prettier...'));
shell.config.verbose = true;

shell.cd('../prettier');
shell.exec('yarn rollup -c scripts/build/rollup.index.config.js');

const dest = 'website/static/lib/index.js';
shell.cp('dist/index.js', dest);
shell.exec(
  `node_modules/babel-cli/bin/babel.js ${dest} ` +
    `--out-file ${dest} --presets=es2015`,
);

// wrap content with IIFE to avoid `assign to readonly` error on Safari
const content = fs.readFileSync(dest, 'utf8');
const wrapped = `"use strict";(function(){${content}}());`;
fs.writeFileSync(dest, wrapped);

shell.cp(dest, '../website/public/prettier/lib/');
