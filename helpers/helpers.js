const fs = require('fs');
const util = require('util');

//Use Util to turn readFile into a promise.
const readFromFile = util.promisify(fs.readFile);



module.exports = { readFromFile };