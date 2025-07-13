
//create dummy repo 
// then new file .gitignore
//write somathing
//git init
//git add.
//git commit -m"my first module"
// U	Untracked
// A	Added (staged)
// M	Modified
// D	Deleted
// R	Renamed
// C	Copied





// git remote add origin https://github.com/mantasha-shaikh/node-tutorial.git
// Next steps (push karne ke liye):
// git push -u origin main
// Ya agar branch ka naam master hai:
// git push -u origin master



// File ko delete karo (VS Code ya Explorer se).
// Fir git add . karo.
// git status me file ke aage D (Deleted) sign aa jayega.

// git commit -m "delete file"

// File ka naam badlo (VS Code ya Explorer se).
// Fir git add . karo.
// git status me file ke aage R (Renamed) sign aa jayega.
// git commit -m "rename file"


// U (Untracked):
// File abhi git ke control me nahi hai.
// Kaise aata hai: Nayi file banate ho, abhi git add . nahi kiya.

// A (Added):
// File staging area me aa gayi hai, commit hone ke liye ready hai.
// Kaise aata hai: git add . karne ke baad.

// M (Modified):
// File me changes hue hain, lekin abhi staging area me nahi hai.
// Kaise aata hai: File edit karo, lekin git add . nahi karo.

// D (Deleted):
// File delete ho gayi hai.
// Kaise aata hai: File delete karo, fir git add . karo.

// R (Renamed):
// File ka naam badla hai.
// Kaise aata hai: File rename karo, fir git add . karo.

// C (Copied):
// File copy hui hai (rarely used, mostly advanced scenarios).

// Summary Table:

// Sign	Kaise aata hai (Action)
// U	Nayi file, abhi git add . nahi
// A	git add . ke baad
// M	File edit, abhi git add . nahi
// D	File delete, fir git add .
// R	File rename, fir git add .
