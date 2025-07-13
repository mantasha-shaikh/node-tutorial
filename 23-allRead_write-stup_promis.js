
 
const {readFile, writeFile} =require('fs').promises;
//step 3
// const util = require('util');
//step 2
// callback function ko promise-based bana deta hai, jisse aap async/await ya .then/.catch use kar sakte hain.
// Bina iske, sirf callback hi chalega, promise/async-await nahi.

//step 3
// const readFilePromis = util.promisify(readFile);
// const writeFilePromis =util.promisify(writeFile);





const start = async()=>{
    try{
    const first =  await readFile('./content/fisrt.txt','utf8');
        const second = await  readFile('./content/second.txt','utf8');
        //step 4 if -> dircet doll remove promiste upper write single promisse
     //thy only read for wrok not  write then we go utils
     const third = await writeFile ('./content/result-sync.txt' ,`Titli udi ${first} and${second} `)
    //extra yu can read write file
     const fourth = await readFile('./content/result-sync.txt','utf8')
     console.log(first,second);
     console.log(fourth);
     
     
    }
    catch(eroor){
        console.log(eroor);
        
    }

    
    
}
start()








