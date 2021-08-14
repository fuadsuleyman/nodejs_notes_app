const chalk = require('chalk');
const getNote = require('./notes');
const yargs = require('yargs');


// as bolow write in terminal we run below command's handlers
// node app.js add - run add command handler and etc

// add command
yargs.command({
    command: 'add',
    describe: 'Add new note.',
    handler: () =>{
        console.log(chalk.green.bold('New note is added.'));
    }
});


// remove command
yargs.command({
    command: 'remove',
    describe: 'Note is removed.',
    handler: () =>{
        console.log(chalk.red.bold('Note is removed.'));
    }
});

// list command
yargs.command({
    command: 'list',
    describe: 'Notes are listed.',
    handler: () =>{
        console.log(chalk.blue.bold('Notes are listed.'));
    }
});

// read command
yargs.command({
    command: 'read',
    describe: 'Note is readed.',
    handler: () =>{
        console.log(chalk.yellowBright.bold('Note is readed.'));
    }
});

console.log(yargs.argv);