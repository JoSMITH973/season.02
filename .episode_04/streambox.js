const fs = require('fs');
const EventEmiter = require('events');
const myEmitter = new EventEmiter();
const { basename, extname } = require('path');
const regex = filename.match(/[a-z]/gm);


module.exports = function transform(filename) {
    if (fs.existsSync(filename)) {
        const readSteam = fs.createReadStream(filename);
        const writeSteam = fs.createWriteStream(newFileName);
        readSteam.pipe(writeSteam);
        console.log(newFileName,'successfully duplicated!');
    }
    else {
        console.log('le fichier n\'existe pas');
    }
};
