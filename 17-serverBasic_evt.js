
const { log } = require('console')
const http =require('http')

 const server =http.createServer((req,res)=>{
    console.log('requested starting');
    
    res.end("hello wold")
 })

 server.listen(5000,()=>{
    console.log("srtaed listning server");
    
 })