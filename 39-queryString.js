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
   res.send('hello world mantu')
   
})



app.listen(5000,()=>{
   console.log("heye dear  ...");
   
})