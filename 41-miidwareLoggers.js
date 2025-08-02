
const express = require('express')
const app = express()
const logger =require('./42_looger')

// Middleware ka kaam request ke baare mein info log karna hai
// next() call karte hi control aage badhta hai route handler tak

//res.send(nahi dalenge to spinn load...)
//midwalre ka matlb user se interction show karega
//midlware  ek fn ki tarah hai jo call karna parta  next()
//req=>middlware=>res
//without middleware gett moore request reapedted


// const logger = (req, res, next) => {
//   const method = req.method;          // GET, POST, etc.
//   const url = req.url;                // Requested URL
//   const time = new Date().getFullYear();  // Current year (for example purpose)

//   console.log(method, url, time);     // Console mein log karna
//   next();                             // Important: warna request wahi atak jaayegi
// };

// ➤ '/' route pe logger middleware apply kiya hai
app.get('/',logger,(req,res)=>{
//    const  method = req.method;
//    const time = new Date().getFullYear();
//    const url = req.url;

// console.log(method,time,url);
 res.send('<h1>hello mantu get staressde</h1>')


})
// ➤ '/home' route bina middleware
app.get('/home',(req,res)=>{
res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
res.send('<h1>about</h1>')
})

app.listen(5000,()=>{
   console.log('listning here ');
   
})