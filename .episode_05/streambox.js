const fs = require('fs');
const path = require('path');
const EventEmiter = require('events');
const myEmitter = new EventEmiter();
const { Transform } = require('stream');

// Correction
module.exports = function transform(filename, re, fn, in_stdout = true) {
  const transformer = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().replace(re, fn))

      callback()
    }
  })

  const readStream = fs.createReadStream(filename)
  
  if (in_stdout) {
    readStream
      .pipe(transformer)
      .pipe(process.stdout)
  } else {
    const writeStream = fs.createWriteStream('./output.txt')

    readStream
      .pipe(transformer)
      .pipe(writeStream)
  }
}
  
  