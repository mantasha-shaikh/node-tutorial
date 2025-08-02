
const express = require('express')
const app = express();

app.use('/',(req,res)=>{
res.json([{name:"mantasha"},{namse:"naruto"}])
})

app.listen(5000,()=>{
console.log("listnig here");

})