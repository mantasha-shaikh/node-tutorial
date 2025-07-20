const http = require('http')
const  fs= require('fs')
const { error } = require('console')

// http.createServer((req,res)=>{
//     const text = fs.readFileSync('./content/result-sync.txt','utf8')
//     res.end(text)
// })
// .listen(5000)

http.createServer((req,res)=>{
   const fileSTream = fs.createReadStream('./content/result-sync.txt','utf8')
   fileSTream.on('open',()=>{
    fileSTream.pipe(res)
   })
   fileSTream.on('error',(err)=>{    
    res.end(err)
   })
})
.listen(5000)