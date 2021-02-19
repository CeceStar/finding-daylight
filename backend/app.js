const express = require("express");
const request = require("request");
const bodyParser = require('body-parser');

const app = express()



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use(bodyParser.json());


  app.post('/', (req, res) => {
    let long = req.body.lng
    let lat = req.body.lat   

    const url = "https://api.geodatasource.com/city";
    const apiKey = "SYB4ORNCL6KQTWYWUEE83XDWPVXYQNSZ";

    let requestURL = url.concat("?key=",apiKey,"&lat=", lat, "&lng=", long);
    console.log(requestURL)
    // res.send(requestURL)
    request(
        { 
          url: requestURL 
        }, 
        (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: error });
        }
        res.json(JSON.parse(body));
      }
    )
  });

// app.get('/', (req, res) => {
//     const lat = 59.31167416666667;
//     const long = 18.0235053333333;
//     const url = "https://api.geodatasource.com/city";
//     const apiKey = "SYB4ORNCL6KQTWYWUEE83XDWPVXYQNSZ";

//     let requestURL = url.concat("?key=",apiKey,"&lat=", lat, "&lng=", long);

//     request(
//         { 
//           url: requestURL 
//         }, 
//         (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
//         res.json(JSON.parse(body));
//       }
//     )
//   });


app.listen(3000, function(err){
    if (!err) {
        console.log('app is running on port 3000')
    }
})