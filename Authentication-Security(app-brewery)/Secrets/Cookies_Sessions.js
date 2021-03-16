//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
//setting up the session
app.use(session({
    secret: "lllll",
    resave: false,
    saveUninitialized: false
}));
//initializing the passport
app.use(passport.initialize());
//making passport to handel session
app.use(passport.session());

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
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
//used to salt & hash the passport and store in db
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

//creating the local configaration for passport-local for local login
passport.use(User.createStrategy());
//setting passport to serialize and deserialize user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get("/secrets", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("secrets")
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

//creating register page api
app.post("/register", function (req, res) {
    //local mongoose package
    User.register({
        username: req.body.username
    }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            //using to check in the local saved passport
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secrets");
            });
        }
    });
});

//creating login page api
app.post("/login", function (req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.passport
    });
    //passport login methods
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            //using to check in the local saved passport
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secrets");
            });
        }
    });
});