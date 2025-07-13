
const {readFile,writeFile}=require('fs')
console.log('start');

readFile('./content/fisrt.txt',('utf8'),(err,result)=>{
    if(err){
        console.log(err);
       return  
    }
    // console.log(result);
    const first = result;
    readFile("./content/second.txt",('utf8'),(err,result)=>{
        if(err){
              console.log(err);
       return
        }
           const second = result;
           writeFile('./content/result-sync.txt',
            `  here is the rsuult baba ${first} ${second}`,
            {flag :'a'},
            (err,result)=>{
                if(err){
 console.log(err);
                return
                }
            //    console.log(result);
               console.log('done with task');
               
            }
        
            
           )


    })
    
})

console.log('starting next process');
