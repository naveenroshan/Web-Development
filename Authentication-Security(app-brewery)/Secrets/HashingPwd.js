//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const md5 = require('md5');

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function () {
    console.log("server is running")
});

//connecting to the  mongo local db
const url = 'mongodb://localhost:27017/userDB';
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongodbOptions);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

//creating register page api
app.post("/register", function (req, res) {
    const newUser = new User({
        email: req.body.username,
        //making the password hashed by md5
        password: md5(req.body.password)
    });
    newUser.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.render("secrets");
        }
    });
});

//creating login page api
app.post("/login", function (req, res) {
    const username = req.body.username;
    //hashing back the password using md5
    const password = md5(req.body.password);
    User.findOne({
        email: username
    }, function (err, founduser) {
        if (err) {
            console.log(err);
        } else {
            if (founduser) {
                if (founduser.password === password) {
                    res.render("secrets");
                }
            }
        }
    });
});