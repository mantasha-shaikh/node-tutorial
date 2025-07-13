const {readFile} = require('fs');
const { result } = require('lodash');
console.log("started");


readFile('./content/fisrt.txt' ,'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
        
    }
    console.log(result);
    console.log('completd first tsak');
    
    
})
console.log('start next task');

