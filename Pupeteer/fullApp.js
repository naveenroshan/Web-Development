const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
var bodyParser = require("body-parser");
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(3000, function () {
  console.log("server is running");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});

app.post("/generate/pdf", jsonParser, async function (req, res) {
  let resp = await printPDF(req.body.inputFileName, req.body.outputFileName);
  return res.send("PDF generated successfully");
});

async function printPDF(inputFileName, outputFileName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(inputFileName, {
    waitUntil: "networkidle0",
  });
  const pdf = await page.pdf({ path: outputFileName, format: "a4" });
  await browser.close();
  return pdf;
}
