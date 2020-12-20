const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require('lodash');

const aboutContent = "Simple blog post for using the power of the EJS";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.listen(3000, function () {
    console.log("Server started on port 3000");
});

var newPost = [];

app.get("/", function (req, res) {
    res.render("home", {
        Post: newPost
    });
});

app.get("/about", function (req, res) {
    res.render("about", {
        aboutPage: aboutContent
    });
});

app.get("/contact", function (req, res) {
    res.render("contact", {
        contactPage: aboutContent
    });
});

app.get("/compose", function (req, res) {
    res.render("compose");
});

app.post("/compose", function (req, res) {
    let composeText = {
        textArea: req.body.textarea,
        paraArea: req.body.para
    };
    newPost.push(composeText);
    res.redirect("/");
});

app.get("/posts/:postName", function (req, res) {
    const urlData = lodash.lowerCase([req.params.postName]);
    newPost.forEach(function (element) {
        const storedTitle = lodash.lowerCase([element.textArea])
        if (storedTitle === urlData) {
            res.render("post", {
                Title: element.textArea,
                Contant: element.paraArea
            });
        } else {
            console.log("bad")
        }
    });
});