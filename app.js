const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Fuad Suleymanov!');

fs.appendFileSync('notes.txt', 'I am a programmer.');