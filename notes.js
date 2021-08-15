const fs = require('fs');

const getNotes = () =>{
    return 'Your notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes();
    notes.push({
        'title': title,
        'body': body
    })

    saveNotes(notes);
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
    'addNote': addNote
}