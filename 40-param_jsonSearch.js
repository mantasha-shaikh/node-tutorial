const express = require('express');
const app = express();
const {products} =require('./36-data')

app.get('/',(req,res)=>{
   res.send('<h1>🧸 Find your perfect product today!</h1><a href="/api/products">💖 Wishlist</a>')
})

app.get('/api/products',(req,res)=>{
const newProducts =products.map((pro)=>{
   const {id,name,image} =pro;
  return {id,name,image};
   
})
res.json(newProducts);

});

// app.get('/api/products/1',(req,res)=>{
//   const singleProducts = products.find((pro)=>{ return pro.id === 1})
//   res.json(singleProducts);
  
// })

app.get('/api/products/:ProductsID',(req,res)=>{
   console.log(req.params);
   const  {ProductsID} =req.params;

   const singleProducts =products.find((pro)=>{return pro.id ===Number(ProductsID)})
    if (!singleProducts) {
      return res.status(404).send("Product not found");
   }
res.json(singleProducts)
   
})

app.get('/api/products/:ProductsID/reviews/:reviewsID',(req,res)=>{
   console.log(req.params);
   res.send('hello word')
   
});



//extra serach



app.get('/api/v1/query',(req,res)=>{
console.log(req.query);

const {search,limit}=req.query;
let sortedProducts =[...products]

if(search){
   sortedProducts =sortedProducts.filter((pro)=>{
      return pro.name.startsWith(search);
   })

   }
 
   if(limit){
      sortedProducts =sortedProducts.slice(0,Number(limit));
   }


// http://localhost:5000/api/v1/query?search=a&limit=1
// http://localhost:5000/api/v1/query?limit=3

if(sortedProducts <1){
   // return res.status(200).send('is not out of reach products')
   return res.status(200).json({sucess:true,data:[]})
}

res.status(200).json(sortedProducts)
//  res.send('hello');
   
})



app.listen(5000,()=>{
   console.log("heye dear  ...");
   
})