const express = require("express");
const app = express();
// const peopleRouter = require("./routh/people");
const peopleRouter = require("./routh/more_cleanP");
 const auth = require("./routh/auth");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("../Nodejs/method_public"));

app.use("/api/people", peopleRouter);
app.use("/login", auth);


app.listen(5000, () => {
  console.log("hello listening");
});
