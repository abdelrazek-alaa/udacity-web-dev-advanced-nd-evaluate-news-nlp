var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

/*Variables*/
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const ApiKey = process.env.API_KEY;

const app = express();

app.use(express.static("dist"));

// configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/postData", function (req, res) {
  const articleUrl = req.body.url;
  const apiUrl = `${baseUrl}?key=${ApiKey}&url=${articleUrl}&lang=en`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const { score_tag, agreement, subjectivity, confidence, irony } = data;
      res.json({
        score_tag: score_tag,
        agreement: agreement,
        subjectivity: subjectivity,
        confidence: confidence,
        irony: irony,
      });
    });
  console.log(articleUrl);
});
