
const { log } = require('console');
const path = require('path');

console.log(` here is ${path.sep}` );

// Separator \ hota hai, toh output hoga:
const  filePath =path.join('/content/','subFolder','test.txt');
console.log(filePath);
// path.join automatically correct separator dalta hai, isliye aapko manually slash nahi dalna padta.
const base =path.basename(filePath);
console.log(base);
//golobal dundega __dirname  fir pure path mai cover kare resole se help se
const absolute = path.resolve(__dirname,'content','subFolder','test.txt')
console.log(absolute);


 
