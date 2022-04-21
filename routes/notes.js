const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend, uuid, deleteNote  } = require('../helpers/helpers')

//get rout retrieving the notes
notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    const {title, text} = req.body;
    //I don't need to check for both title and text b/c that logic is in the front end JS.

    const newNote = {
        title,
        text,
        id: uuid()
    }

    readAndAppend(newNote, './db/db.json');
    res.status(201).json(newNote);

});

notes.delete('/:id', (req, res) => {
    const { id } = req.params;
    deleteNote(id);
    res.json('Note Removed');

});

module.exports = notes;