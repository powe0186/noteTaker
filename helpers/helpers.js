const fs = require('fs');
const util = require('util');
const notes = require('../routes/notes');

//Use Util to turn readFile into a promise.
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.error(err) : console.info(`Note written to ${destination}`)
    );

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const jsonData = JSON.parse(data);
            jsonData.push(content);
            writeToFile(file, jsonData);
        }
    })
};

//Function to get random id for posts - these will be attached to data-id classes so we can erase them later.
function uuid () {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function deleteNote(id) {
    readFromFile('db/db.json', 'utf8')
    .then((data) => {
        let notes = JSON.parse(data);
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id  === id) {
                var noteIndex = i;
            }
        }
        notes.splice(noteIndex, 1);
        writeToFile('db/db.json', notes);
    });
}

module.exports = { readFromFile, writeToFile, readAndAppend, uuid, deleteNote };