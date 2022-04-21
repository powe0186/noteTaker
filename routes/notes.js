const notes = require('express').Router();
const { readFromFile } = require('../helpers/helpers')

//get rout retrieving the notes
notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

module.exports = notes;