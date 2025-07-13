
const os =require('os');
// Ye sirf aapke system ke user ki basic details batata hai.
const user = os.userInfo();
console.log(user);
//mthod return syaytem uptime in seconds

console.log(`the syaytem UPtime is ${os.uptime()} seconds`);


const currentos ={
    name :os.type(),
    release :os.release(),
    totalMEM : os.totalmem(),
    Freemem :os.freemem(),
}
console.log(currentos);
