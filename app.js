const fs = require('fs');

const notes = require('./notes');

const getNote = require('./note');

// import other file
const utils = require('./utils');

const name = require('./utils')

// write to file, averride all in file
fs.writeFileSync('notes.txt', 'My name is Fuad Suleymanov!');

// append to file
fs.appendFileSync('notes.txt', ' I am a programmer.');

console.log('Print from app.js file');

console.log(`Print name from utils file: ${name}`);

notes.createNote();
notes.getPosts()

const note = getNote();

console.log(`From Note file getNote function: ${note}`);


