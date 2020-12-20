const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

//making body parser avaliable to use in the code
app.use(bodyParser.urlencoded({
  extended: true
}));

//making static css and image file avalible to express
app.use(express.static("public"));
//setting the lister to work in server and local
app.listen(process.env.PORT || 3000, function () {
  console.log("server is running");
});

app.get("/", function (req, res) {
  //sending the Html file to browser
  res.sendFile(__dirname + "/signup.html");
});

//method to get the data from signuphtml file
app.post("/post", function (req, res) {
  const firstname = req.body.fname;
  const Lastname = req.body.lname;
  const email = req.body.email;
  console.log(firstname, Lastname, email);
  //making data to send to mailchimp
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstname,
        LNAME: Lastname
      }
    }]
  };
  //converting data to json object
  const jsonData = JSON.stringify(data);
  //sending url to the list to add in mailchimp
  const url = "https://us2.api.mailchimp.com/3.0/lists/561c464500"
  //addtional params send to mailchimp
  const options = {
    method: "POST",
    auth: "mike:1bcd5d8f95923d059ddb9acce87c1a17-us2"
  }
  //making request to the mailchimp and reciving the response
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    })
  })
  // sending the json data we created
  request.write(jsonData);
  //ending the request
  request.end();
});

//faliure route
app.post("/failure", function (req, res) {
  res.redirect("/");
});