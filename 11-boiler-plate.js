
const { write } = require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
res.write('welcome my dear mantasha from dazai')
res.end()
})

server.listen(5000)