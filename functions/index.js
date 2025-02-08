const functions = require("firebase-functions");
const express = require("express");
const request = require("request");

const app = express();

app.post("/", (req, res) => {
  const long = req.body.lng;
  const lat = req.body.lat;
  const requestURL = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${long}&time_format=24`

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
