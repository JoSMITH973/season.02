const fs = require('fs');
const path = require('path');
const EventEmiter = require('events');
const readline = require('readline');
const csv = require('csvtojson');

module.exports = function csv2json(filename) {
  const input = fs.createReadStream(filename)
  const rl = readline.createInterface({input})

  let lineCount = 0;

  let header= []
  let records= []

  rl.on('line', (line) => {
      if (lineCount === 0) {
      // Header
      header=line.split(';')
    }
    else {
      // Data
      const record = {};
      const values = line.split(';');
      for (let i = 0; i< values.length;i++) {
        const key = header[i];
        const value = values[i];

        record[key] = value;
      }
      // lineCount++
      console.log(record);
    }
  })
}

// module.exports = function csv2json(filename) {
// csv()
// .fromFile(filename)
// .split(/;/gm)
// .then(jsonObj=>{
//     console.log(jsonObj);
// });
 
// // Async / await usage
// return csv().fromFile(filename);

// const readStream=require('fs').createReadStream(filename);
// readStream
//   .pipe(csv())
//   .pipe(process.stdout);
// }


  