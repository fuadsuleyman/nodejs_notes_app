const chalk = require('chalk');
const getNote = require('./notes');

const command = process.argv;

// run app with below, third word(Fuad) is user input
// node app.js Fuad
console.log(`User input: ${command[2]}`);