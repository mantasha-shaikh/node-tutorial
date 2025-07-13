
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

//epsiode mai git init ,
// git add .
//git   commit  - m "sjwjw"

const _ = require('lodash')
const items =[1,[2,[3,[3,]]]]
const newitem = _.flattenDeep(items);
console.log(newitem);
