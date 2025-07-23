
 
 const readline =require("readline").createInterface({
   input :process.stdin,
   output:process.stdout
 });

readline.question("enter your marks  :",(input)=>{

const marks = Number(input);


 if(marks >= 90){
console.log("Grade A " , marks);

 }else if(marks >= 70){
    console.log("Grade B ");
 }
 else if(marks >= 50){
    console.log("Grade C ");
 }
 else if(marks >= 35){
    console.log("Grade D");
 }else{
     console.log("keep trying hard");

   }


readline.close();

  });
