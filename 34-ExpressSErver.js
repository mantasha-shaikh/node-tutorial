

const express = require('express')
const app = express()
const path = require('path')


//setup static asset and middleware
app.use(express.static('./Demo_projects/public'))//all filse auto add

// app.get('/',(req,res)=>{

//    res.sendFile(path.resolve(__dirname,'./Demo_projects/index.html'))
 //adding static asset
 //ssr
// })

app.all('/*splat',(req,res)=>{
   res.status(404).send("<h1>hello not found</h1>")
})


app.listen(5000,()=>{
   console.log('herr listning');
   
})