
const express = require('express')
const app = express();
const product = require('./36-data')

app.use('/',(req,res)=>{
res.json(product)
})

app.listen(5000,()=>{
console.log("listnig here");

})