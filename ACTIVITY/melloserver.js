

const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("hello mello")
    res.end() // no data here  likh sacte jab kuch nahi likha ho
})

server.listen(5000,()=>{
    console.log("listning here ");
    
})