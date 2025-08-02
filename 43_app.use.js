//app.use()


const express = require('express')
const app = express()
const logger =require('./42_looger')

// app.use(logger);//oder matter
app.use('/api',logger);
app.get('/',(req,res)=>{

// console.log(method,time,url);
 res.send('<h1>hello mantu get staressde</h1>')


})

app.get('/home',(req,res)=>{
res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
res.send('<h1>about</h1>')
})

app.get('/api/products/',(req,res)=>{
res.send('<h1>products</h1>')
})

app.get('/api/items',(req,res)=>{
res.send('<h1>items</h1>')
})

app.listen(5000,()=>{
   console.log('listning here ');
   
})