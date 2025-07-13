

const {readFile} =require('fs');




const getText =(path)=>{
return new Promise((resolve,reject)=>{
readFile(path,'utf8',(error,data)=>{
    if(error){
         reject(error);
       
    }
    else{
          resolve(data);
        
    }
})
})
}

const start = async()=>{
    try{
    const first =  await getText('./content/fisrt.txt');
        const second = await getText('./content/second.txt');
     //thy only read for wrok not  write then we go utils
    }
    catch(eroor){
        console.log(eroor);
        
    }

    
    
}
start()








