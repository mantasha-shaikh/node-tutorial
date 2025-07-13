
//module
// every file is module (by default)
// module - encapsulated code (only share minimum)
// const naruto ="Naruto";

// const saskue ="Saskue";
// const sayHi =(name)=>{
//     console.log(`hello there ${name}`);
    
// }
// sayHi('kakshi');
// sayHi(naruto);
// sayHi(saskue);
const  {naruto ,saskue} = require("./4-name");
 const  names = require("./4-name"); 
 const sayHi =require("./5-utils");
const data = require("./6-alternativeflaver");
require("./7-maind-grande");
console.log(data);

// sayHi('kakshi');
// sayHi(naruto);
// sayHi(saskue);
// sayHi(names.naruto);
// sayHi(names.saskue);
