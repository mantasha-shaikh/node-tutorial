
const {readFile} =require('fs');

//only one read file can perfom
readFile('./content/fisrt.txt' ,'utf8',(error,data1)=>{
if(error){
      console.log(error);
    return
}
else{
  
    
    readFile('./content/second.txt','utf8',(error,data2)=> {
if(error){
      console.log(error);
    return
}
  else{
    console.log(data1);
        console.log(data2);
    }
   
    
 });
}
})