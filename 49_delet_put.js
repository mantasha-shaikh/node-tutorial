const  express = require('express')
const  app = express()
const {people} = require('./36-data')

app.use(express.static('../Nodejs/method_public'))//middleware of assset

//parse from data 
app.use(express.json())
app.use(express.urlencoded({extended:false}));//handle to shoaw daat through middare get name via req.body
app.get('/api/people',(req,res)=>{
res.status(200).json({success:true,data:people})
})


app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(401).json({success:false,msg:'pls provide name value'})
    }
    else{
        res.status(201).send({success:true,person:name})
    }
    // res.status(201).json({success:true,data:people})
})

//post
app.post('/login',(req,res)=>{
    console.log(req.body);//input  mila
    const {name } =req.body;
    if(name){
        res.status(200).send(`pls welcome ${name}`)
    }else{
         res.status(401).send(`prove your name pls`)
    }


})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess:false,msg:"provide your name"})
    }
    res.status(201).send({success:true,data:[...people,name]})

})


app.put('/api/people/:id',(req,res)=>{//step 3
const {id} =req.params;
const {name }=req.body;
const person =people.find((person)=> person.id ===Number(id))
console.log(person);

   if(!person){
        return res.status(400).json({sucess:false,msg:"provide your name"})
    }
    const newperson =people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name;
        }
        return person
       
    })
 res.status(200).json({success:true,data:newperson})
})


app.delete('/api/people/:id',(req,res)=>{
    const person =people.find((person)=> person.id ===Number(req.params.id))
console.log(person);

   if(!person){
        return res.status(400).json({sucess:false,msg:"provide your name"})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    return res.status(200).json({success:true,data:newPeople})
})

app.post('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.listen(5000,()=>{
    console.log('hello listning');
    
})


//more seprate file bana raha hai router ke nader do 