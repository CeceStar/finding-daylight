const functions = require("firebase-functions");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(bodyParser.json());

app.post("/", (req, res) => {
  let long = req.body.lng;
  let lat = req.body.lat;

  const url = "https://api.geodatasource.com/city";
  const apiKey = "SYB4ORNCL6KQTWYWUEE83XDWPVXYQNSZ";

  let requestURL = url.concat("?key=", apiKey, "&lat=", lat, "&lng=", long);

  request(
    {
      url: requestURL,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error });
      }
      res.json(JSON.parse(body));
    }
  );
});

exports.api = functions.https.onRequest(app);
