
const express = require('express')
const app = express();
const {products} = require('./36-data')

app.get('/',(req,res)=>{
res.send('<h1>heloo oops</h1> <a href="/api/product">products</a>')
})

app.get('/api/product',(req,res)=>{
   const newProducts =products.map((pro)=>{
      const {id,name,image}=pro;
return{id,name,image};
   })
   res.json(newProducts)
})

// app.get('/api/product/1',(req,res)=>{
//    console.log(req);

app.get('/api/product/:productID',(req,res)=>{
   // console.log(req);
   // console.log(req.params);
   
   
   const {productID}=req.params  ;//http://localhost:3000/product/42
   

   const singleproducts = products.find((pro)=>pro.id ===Number(productID))//dynamic find any

   if(!singleproducts){
      return res.status(404).send("product dosent exit")
   }
  return res.json(singleproducts)
})

// http://localhost:5000/api/v1/query?search=a&limit=2//limit ka matlb kitne item chiye bhai
app.get('/api/product/:productID/reviews/:reviewID',(req,res)=>{
   console.log(req.params);
   res.send("hello worls")
})

app.get('/api/v1/query',(req,res)=>{
   console.log(req.query);
   res.send('hello world mantu')
   
})

app.listen(5000,()=>{
console.log("listnig here");

})




// req.params → route ke parameters se data milta hai (jaise /product/:id)

// req.query → URL ke query string se milta hai (jaise /product?productID=42)

// req.body → POST request me body se data milta hai (form ya JSON ke through)