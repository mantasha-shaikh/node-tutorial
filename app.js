const express = require("express")
const app = express();
const logger = require('./42_looger')
const authorize = require('./45_authroize')

app.use([logger,authorize])//jo first in forst shoe


//req => middware => res

//1.use vs route
//2.option- our own/express/thirsd party

app.get('/',(req,res)=>{
   res.send('hey dear')
})

app.get('/api/products',(req,res)=>{
   res.send('products')
})

app.get('/api/items',(req,res)=>{
   console.log(req.user);
   // { nam: 'john', id: 3 }
   
   res.send('items')
})

app.listen(5000,()=>{
   console.log('listning here ');
   
})