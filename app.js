const fs = require('fs');

const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');

const getNote = require('./notes');

const note = getNote();

console.log(`From Note file getNote function: ${note}`);

console.log(`Validate email: ${validator.isEmail('fuadpayme@mail.com')}`)
console.log(`Validate url: ${validator.isURL('fuadpaymemailcom')}`)

console.log(chalk.green.bold.inverse.italic('Success'));

const warning = chalk.keyword('orange');

console.log(warning('This is Error word!'));



