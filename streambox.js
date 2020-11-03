const fs = require('fs');
const EventEmiter = require('events');
const { basename, extname } = require('path');
const myEmitter = new EventEmiter();

module.exports = function duplicate(filename) {
    if (fs.existsSync(filename)) {
        let ext = extname(filename);
        let nom = basename(filename,ext);
        let newFileName = nom+'.Copy'+ext;
        const readSteam = fs.createReadStream(filename);
        const writeSteam = fs.createWriteStream(newFileName);
        readSteam.pipe(writeSteam);
        console.log(newFileName,'successfully duplicated!');
    }
    else {
        console.log('le fichier n\'existe pas');
    }
};
