 const http =require('http')

// const server = http.createServer((req,res)=>{
//     res.write("hello dear")
// res.end("hello")
// })
// server.listen(5000,()=>{
//     console.log("listning is here ");
    
// })


//Using evnt emitter API
const server = http.createServer()
//emits request evnt
//subscirbe to its/listen for it /listen or it
server.on((req,res)=>{
    res.end("hello syaonara")
})

server.listen(5000)
