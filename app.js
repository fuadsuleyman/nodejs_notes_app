const chalk = require('chalk');
const noteController = require('./notes');
const yargs = require('yargs');

// as bolow write in terminal we run below command's handlers
// node app.js add - run add command handler and etc

// add command
yargs.command({
    command: 'add',
    describe: 'Add new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteController.addNote(argv.title, argv.body);
    }
});


// remove command
yargs.command({
    command: 'remove',
    describe: 'Note is removed.',
    builder: {
        title: {
            describe: 'Remove note with this title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteController.removeNote(argv.title);
    }
});

// list command
yargs.command({
    command: 'list',
    describe: 'Notes are listed.',
    handler(){
        noteController.listNotes();
        // console.log(chalk.blue.bold('Notes are listed.'));
    }
});

// read command
yargs.command({
    command: 'read',
    describe: 'Note is readed.',
    builder: {
        title: {
            describe: 'Remove note with this title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteController.readNote(argv.title);
        // console.log(chalk.yellowBright.bold('Note is readed.'));
    }
});

yargs.parse();

// this below or above yargs.parse() one of them is must, other wice we can't get output
// console.log(yargs.argv);