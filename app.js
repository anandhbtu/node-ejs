"use strict";

const express = require("express");
require("express-async-errors");
const bodyParser = require("body-parser");
const app = express();


const morgan = require("morgan");

app.set("view engine", "ejs");

//database connection
require("./mongo");

//Models


require("./models/student");


require("./models/enroll");

//MidleWare
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()).use(morgan());


app.use("/dashboard", require("./routes/students"));

app.use("/", require("./routes/enroll"));
// var items =["Anand Bhardwaj","Rohit"]

// app.get('/', (req, res) => {
//   let data="testing data"
// res.render('list',{kindofdata:data,newListItems:items})
// })

// app.post("/",(req,res)=>{
//   var   item = req.body.newItem
//   items.push(item)
//    console.log('item :>> ', item);
//    res.redirect("/")
//    })

app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("Routes not found");
  next(error);
});

if (app.get("env") === "production") {
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
    });
  });
}

app.use((error, req, res, next) => {
  res.status(req.status || 500).send({
    message: error.message,
    stack: error.stack,
  });
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () =>
  console.log(`..........................server connect on port ${PORT}`)
);
