
//npm -global command , comes with nodes
//npm --version


//local dependency -use it only in this particular  project
//npm i <pakageName>

//global dependency -- use in project
//npm intall -g <pakageName>
//sudo intall  -g <pakageName> (mac)

//pakage.json  -manifest file(stores imp info project/pakge)
//manual approach (create package.json in root ,create properties  etc)
//npm init  (step by step press enetr to skip)
//npm init -y (everything default)



// in pakage when we intsall npm 
// here is start we have to write  pakage .json
// here is dev we have to write  pakage .json

// npm start → normal run
// npm run dev → auto-restart with nodemon
// npm run dev

//whant to unistall 
// npm unistall boostar

   // "dev":"nodemon app.js"  isko hata ke fir start per diect lick sacte hai hoi


   //  "start": "nodemon app.js"  -> npm strt
//epsiode mai git init ,
// git add .
//git   commit  - m "sjwjw"

const _ = require('lodash')
const items =[1,[2,[3,[3,]]]]
const newitem = _.flattenDeep(items);
console.log(newitem);
