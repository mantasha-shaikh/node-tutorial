
const http = require('http')
const {readFileSync} = require('fs')
//get all files
const homePage = readFileSync('./30-HtmlFile.html')



const server = http.createServer((req,res)=>{


   // console.log(req);
   //  console.log(req.url);
   //status code  check wth writeHead
   if(req.url ==='/'){
         res.writeHead(200,{'Content-type':'text/html'})
   res.write('<h1>hello world<h1>')
   console.log('syanoraa');
   
res.end()
   }
 else if (req.url ==='/content'){
       res.writeHead(200,{'Content-type':'text/html'})
   res.write('<h1>About page<h1>')
   console.log('syanoraa');
   
res.end()
   }
     else  if (req.url ==='/home'){
       res.writeHead(200,{'Content-type':'text/html'})
   res.write(homePage)
   console.log('syanoraa');
   
res.end()
   }

    else {
       res.writeHead(404,{'Content-type':'text/html'})
   res.write('<h1>Page not found<h1>')
   console.log('syanoraa');
   
res.end()
   }

})
server.listen(5000,()=>{
   console.log('listning');
   
})

//information 100-199
//scuess response 200-299
//Rediracts 300-399
//Client erore 400-499
//server eror 500-599