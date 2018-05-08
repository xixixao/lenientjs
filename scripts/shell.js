'use strict';

const chalk = require('chalk');
const readlineSync = require('readline-sync');
const shell = require('shelljs');

shell.config.verbose = true;

const info = message => {
  console.log(chalk.cyan(message));
};

const log = console.log;

const confirm = readlineSync.keyInYN;

module.exports = {chalk, confirm, info, log, shell};
