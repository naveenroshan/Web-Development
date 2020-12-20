const express = require("express");
const app = express();
const bodyParser = require("body-parser")

//used to parser the value from html forms
app.use(bodyParser.urlencoded({extended: true}));

//checking the server is on
app.listen(3000, function () {
    console.log("server started at port 3000")
});

//giving the response to use for home page for browser request
app.get("/" ,function(req, res){
//getting the path by contant folder localtion plus the file naeme
res.sendFile(__dirname + "/index.html");
})

//sending data to server
app.post("/", function(req, res){
//getting data from Html forms
var num1= Number(req.body.NumberOne);
var num2 = Number(req.body.NumberTwo); 
var result = num1 + num2;
res.sendStatus(result);
})