const fs = require('fs');
const path = require('path');
const EventEmiter = require('events');
const readline = require('readline');
const csv = require('csvtojson');


// Correction
module.exports = function csv2json(filename) {
  const input = fs.createReadStream(filename)
  const rl = readline.createInterface({input})

  let lineCount = 0;

  let header= []
  let records= []

  rl.on('line', (line, i) => {
    if (lineCount === 0) {
      headers = line.split(';')
    } else {
      const record = {}

      line.split(';').forEach((value, i) => {
        const key = headers[i]
        // console.log(value);
        
        if (value.includes(',')) {
          record[key] = value.split(',')
        } else {
          record[key] = value
        }
      })
      
      records.push(record)
    }

    lineCount++
  })

  rl.on('close', () => {
    const { name } = path.parse(filename)

    fs.writeFile(`${name}.json`, JSON.stringify(records, null, 2), (err) => {
      if(err) {
        return console.log(err);
      }

      console.log(`${filename} converted to json: ${name}.json`)
    })
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


  