const {createReadStream} = require('fs')
const { result } = require('lodash')

const stream = createReadStream('./content/result-sync.txt')

stream.on('data',(result)=>{
    console.log(result)
    
})

//kl fir dusre straem se uper file ko run karke fir yaha pr nana