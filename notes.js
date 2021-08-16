const fs = require('fs');
const chalk = require('./chalk');
const getNotes = () =>{
    return 'Your notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes();
    const dublicatesNotes = notes.filter(note => note.title === title)

    if(dublicatesNotes.length === 0) {
        notes.push({
            'title': title,
            'body': body
        })
        saveNotes(notes);
        console.log(chalk.success('New note added!'));
    } else {
        console.log(chalk.error('Title is taken!'));
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();

    const newNotes = notes.filter(note => note.title !== title)
    if (notes.length !== newNotes.length) {
        saveNotes(newNotes);
        console.log(chalk.success(`Note with this title: ${chalk.warning(title)} is removed!`));
    } else {
        console.log(chalk.error(`Note with this title: ${chalk.warning(title)} not exists!`));
    }
}

const listNotes = () => {
    console.log(chalk.success('Your Notes...'));
    const notes = loadNotes();
    notes.forEach(note => console.log(chalk.warning(note.title)));
}

const readNote = (title) => {
    notes = loadNotes();
    let readedNote = []
    readedNote = notes.filter(note => note.title === title);

    if (readedNote.length === 0){
        console.log(chalk.error('Note with this title not exists!'))
    } else {
        console.log(chalk.success(`Note title: ${chalk.warning(readedNote[0].title)}, Note body: ${chalk.warning(readedNote[0].body)}`))
    }


}


const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try{
        const bufferData = fs.readFileSync('notes.json');
        const jsonData = bufferData.toString();
        return JSON.parse(jsonData);
    }catch(e) {
        return [];
    }
}

module.exports = {
    'getNotes': getNotes,
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
}