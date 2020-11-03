const fs = require('fs');
const EventEmiter = require('events');
const myEmitter = new EventEmiter();
const { basename, extname } = require('path');
const transform = require('stream');
const { Transform } = require('stream');


module.exports = function transform(filename, re, fn) {
    if (fs.existsSync(filename)) {
        const file = fs.readFileSync(filename, 'utf-8');
        
        let ext = extname(filename);
        let nom = basename(filename,ext);
        let newFileName = nom+'.Copy'+ext;
        let replace = file.toUpperCase()
        fs.writeFileSync(newFileName, replace)
    }
    else {
        console.log('le fichier n\'existe pas');
    }
};

// Correction

// module.exports = function transform(filename, re, fn, in_stdout = true) {
//     const transformer = new Transform({
//       transform(chunk, _, callback) {
//         this.push(chunk.toString().replace(re, fn))
  
//         callback()
//       }
//     })
  
//     const readStream = fs.createReadStream(filename)
    
//     readStream
//       .pipe(transformer)
//       .pipe(process.stdout)
//   }