// ummary:
// is mai file bana hai read se
// fs.readFileSync ek function hai jo file ko synchronously read karta hai.
// Aapne function ka naam galat likha hai (readfileSync → readFileSync).
// File read karne ke liye usko filename aur encoding dena padta hai.

const {readFileSync,writeFileSync}=require('fs')
console.log('start');

const first =readFileSync('./content/fisrt.txt',"utf8");
const second =readFileSync('./content/second.txt',"utf8");

writeFileSync(
    './content/result-sync.txt',
    `here is result making fight to each other via file :${first} ${second}`,
    { flag: 'a' }
)

// if file nahi hai dale ga writeFileSync ye warna add karaega jo result hai file mai
// Agar aap { flag: 'a' } use karte hain, toh naya data file ke end me add hota hai, aur purana data delete nahi hota.
// Iska matlab hai file me previous (purana) data bhi rahega, aur jo naya likhenge woh bhi add ho jayega.
console.log(first,second);
console.log('done with task');
console.log('starting next process');