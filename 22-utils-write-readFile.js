

//2 step
// utils.js (ye ek module hai, aur utils bhi hai)

// Node.js me har file ek module hoti hai.
// Aap kisi bhi file se function, object, variable export kar sakte ho (using module.exports), aur dusri file me require() se use kar sakte ho.

const { error } = require('console')
const { promises } = require('dns')
const {readFile, writeFile} =require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')
// util.promisify

// callback function ko promise-based bana deta hai, jisse aap async/await ya .then/.catch use kar sakte hain.
// Bina iske, sirf callback hi chalega, promise/async-await nahi.
const util =require('util')
 const readFilePromis = util.promisify(readFile);
 const writeFilePromis = util.promisify(writeFile);




//third step
const start =async()=>{
    try{
    const first =  await readFilePromis('./content/fisrt.txt','utf8');
        const second =  await readFilePromis('./content/fisrt.txt','utf8');
        const third  = await writeFilePromis('./content/result-sync.txt',`this is Awosome fantastic i know  :${first} and ${second}`);
         console.log(first,second);
        
    }
    catch (error){
console.log(error);

    }

}

start()