const fs = require('fs');
const path = require('path');
const readline = require('readline');

// module.exports = function WTFIsThisPipe() {
//     rdDir = fs.readdirSync('./');
//     rdDir.forEach(dir => {
//         let verify = fs.statSync(dir)
//         if(verify.isDirectory()) {
//             files = fs.readdirSync(dir);
//             // console.log(dir+'/'+files);
//             ext = path.extname(files);
//             if(ext=='.js'){
//                 files.forEach(file => {
//                     console.log(file)
//                     // const readSteam = fs.createReadStream(file);
//                     // readSteam.pipe(process.stdout);
//                 })
//             }
//         }
//         else {
//             // (console.log(dir,'is a file!'))

//         }
//     });
    
// }


// Correction

module.exports = function WTFIsThisPipe() {
    console.log(__dirname);
    fs.readdir(__dirname, (error, files) => {
        for (const filename of files.filter(filename => filename.endsWith('.js'))) {
            const input = fs.createReadStream(filename)
            const rl = readline.createInterface({input})

            rl.on('line', (line) => {
                if (/\*function/gm.test(line)) {
                    console.log(
                        line.replace('function', 'I will finish :').slice(0, -2)
                    );
                }
            })
        }
    });
}