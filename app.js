const fs = require('fs');

const notes = require('./notes');

const getNote = require('./notes');

const note = getNote();

console.log(`From Note file getNote function: ${note}`);


