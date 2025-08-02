const authorize =(req,res,next)=>{
//    console.log('authorize');//1

const {user }=req.query;
if(user ==='john'){
    req.user={nam:'john',id:3};
     next()
}
else {
    res.status(401).send("fraud/unauthorize")
}
  
   
}
module.exports=authorize;
//5000 else wala
// http://localhost:5000/?user=john