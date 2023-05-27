const express = require("express");
const app = express();
const port = 3000;

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}

// define all middleware above so that it can be called below 
// BEFORE the "GET" ends the cycle

app.use(requestTime)


app.get("/", function (req, res) {
  let responseText = 'Hello World!<br>'
  responseText += `<h1>Requested at ${req.requestTime}</h1>`
  res.send(responseText)
});

// THIS NEVER GETS CALLED BECASE
// THE "GET" ABOVE TERMINATES THE CYCLE
// THIS IS MIDDLEWARE SO NEEDS TO BE IN THE MIDDLE
app.use(myLogger)

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
