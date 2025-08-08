

const {people} = require('../36-data')

const getPeople=(req,res)=>{
res.status(200).json({success:true,data:people})
}


const createPerson =(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess:false,msg:"provide your name"})
    }
    res.status(201).send({success:true,data:[...people,name]})

}

const updatePerson =(req,res)=>{//step 3
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
}


const deletePERson =(req,res)=>{
    const person =people.find((person)=> person.id ===Number(req.params.id))
console.log(person);

   if(!person){
        return res.status(400).json({sucess:false,msg:"provide your name"})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    return res.status(200).json({success:true,data:newPeople})
}






module.exports={
    getPeople,
    createPerson,
    updatePerson,
    deletePERson,
}