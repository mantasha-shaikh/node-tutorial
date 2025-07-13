const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("hello world")
               return
    }
    if(req.url ==='/about'){
//blocking code
    //  for(let i =0; i<1000; i++ ){
    //     for(let j=0;j<1000;j++){
    //         console.log(`${j} ${i}`);
            
    //     }
    //  }
    }
    res.end('end Page')
    
})
server.listen(5000,()=>{
    console.log("started linting ");
    
})