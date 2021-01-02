const express = require("express");
const app = express();
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Pushing the local static files.
app.use(express.static("public"));

//setting the lister to work in server and local
app.listen(process.env.PORT || 3000, function () {
    console.log("server is running");
});

app.get("/video-canvas", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/canvasDemo.html");
});

app.get("/pixel-change", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/pixel-changes.html");
});

app.get("/audio-app", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/audio.html");
});

app.get("/muti-audio", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/muti-audio.html");
});

app.get("/muti-video", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/muti-video.html");
});

app.get("/record-media", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/recording-a-media-element.html");
});

app.get("/record-canvas", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/record-canvas.html");
});

app.get("/record-video-audio", function (req, res) {
    //sending the Html file to browser
    res.sendFile(__dirname + "/record-video-audio.html");
});