const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

//making body parser avaliable to use in the code
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function () {
  console.log("server is running");
});

app.get("/", function (req, res) {
  //sending the Html file to browser
  res.sendFile(__dirname + "/index.html");
});

//method gets city data from index.html file
app.post("/post", function (req, res) {
  const city = req.body.city;
  const apiKey = "d5bee1a4b420f3b25d378b28df7acd8d";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  //get the data for the given city
  https.get(url, function (responce) {
    //printing the data from the responce as HTML
    responce.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //getting the icon weather image from responce
      const iconData = weatherData.weather[0].icon;
      const imageURL =
        "http://openweathermap.org/img/wn/" + iconData + "@2x.png";
      //selecting the temp value from the json data
      const temp = weatherData.main.temp;
      const weatherdescrib = weatherData.weather[0].description;
      //write data to HTML
      res.write("<p> status code " + responce.statusCode + "<p>");
      res.write("<p> The weather is currently " + weatherdescrib + "<p>");
      res.write(
        "<h1>The temperature in " +
        city +
        " is " +
        temp +
        " degree Celcius.</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      //sending the responce as HTML
      res.send();
    });
  });
});