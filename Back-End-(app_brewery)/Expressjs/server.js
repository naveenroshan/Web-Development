const express = require("express");
const app = express();

//checking the server is on
app.listen(3000, function () {
    console.log("server started at port 3000")
});

//defining the get request to server to repond to the browser request
app.get("/", function (req, res) {
    res.send("<h1>Express server</h1>")
})

//creating different route
app.get("/residences", function (req, res) {
    res.send("<h1>London, UK</h1>")
})