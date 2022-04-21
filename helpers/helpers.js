const fs = require('fs');
const util = require('util');

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



module.exports = { readFromFile, writeToFile, readAndAppend, uuid };