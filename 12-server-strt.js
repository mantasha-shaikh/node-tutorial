

const { write } = require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url ==='/'){
      res.end('welcome my dear mantasha about from dazai')  
        return
    }
    if(req.url ==='/about'){
       res.end(' About welcome my dear mantasha from dazai') 
         return
    }

res.end(`
 <h1>Oops !</h1>
 <p> here is somthing wrong</p>
 <a href="/">back to home</a>
 
 
    `)
})

server.listen(5000)
