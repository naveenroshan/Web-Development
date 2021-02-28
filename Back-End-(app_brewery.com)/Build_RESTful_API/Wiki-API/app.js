const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.listen(3000,function(){
console.log("server is running");
})

//connecting to the  mongo local db
const url = 'mongodb://localhost:27017/WikiDB';
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,{mongodbOptions});

//creating schema
const articleSchema = {
  title: String,
  content: String
};

//creating model
const Article = mongoose.model("Article", articleSchema);
