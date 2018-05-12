'use strict';

const chalk = require('chalk');
const readlineSync = require('readline-sync');
const shell = require('shelljs');

shell.config.verbose = true;
shell.config.fatal = true;

const info = message => {
  console.log(chalk.cyan(message));
};

const log = console.log;

const confirm = readlineSync.keyInYN;

const today = new Date().toISOString().slice(0, 10);

module.exports = {chalk, confirm, info, log, shell, today};
