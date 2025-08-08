
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

// git branch

// * main
//   dev
//   feature-login



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


// <!-- 
// 🎯 HOW TO CONTRIBUTE VIA PULL REQUEST (PR)

// Step 1: Fork the original repository from GitHub.

// Step 2: Clone your forked repo:
//   git clone https://github.com/<your-username>/<repo-name>.git
//   cd <repo-name>

// Step 3: Create a new branch for your feature/fix:
//   git checkout -b my-feature-branch

// Step 4: Make your code changes.
//   git add .
//   git commit -m "Added: My feature or fix"

// Step 5: Push your changes to your fork:
//   git push origin my-feature-branch

// Step 6: Go to GitHub and click "Compare & Pull Request" button.
//   - Add title and description.
//   - Click "Create Pull Request"

// ✅ Now wait for the maintainer to review or merge your code!

// Bonus:
//   Check remote link: git remote -v

//  -->
