
const { error } = require('console');
const {readFile} =require('fs');
const { reject, result } = require('lodash');
const { resolve } = require('path');

const getText =(path)=>{
return new Promise((resolve,reject)=>{
readFile(path,'utf8',(error,data)=>{
    if(error){
        reject(console.log(error));
       
    }
    else{
        resolve(console.log(data))
        
    }
})
})
}
getText('./content/fisrt.txt').then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
    
});




