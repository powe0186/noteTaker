const express = require('express');
const path = require('path');
const api = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const { readFromFile, writeToFile, readAndAppend } = require('./helpers/helpers');
app.use('/api', api);

//Don't need because of line 7, but what the heck!
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);





app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));