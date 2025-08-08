const express = require('express')
const router= express.Router();

const {people} = require('../36-data')

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePERson,
}=require('../controllers/people')

router.get('/',getPeople)


// http://localhost:5000/api/people/postman/
router.post('/postman',createPerson)

// http://localhost:5000/api/people/2
//row /json
// {
//     "name":"jian"
// }
router.put('/:id',updatePerson)



// router.route('/').get(getPeople)
// router.route('/postman').post(createPerson)

router.delete('/:id',deletePERson)

module.exports=router



//more serpate by differnt folder  