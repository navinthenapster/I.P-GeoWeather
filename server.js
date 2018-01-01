
const express = require('express')

const app = express()
const port = 3000

app.use(express.static(__dirname + '/app/view'));

app.listen(port, (err) => {
  if (err) {
     return console.log('something bad happened', err)
  }
  console.log(`Server is listening on ${port}`);
  console.log(`GO to localhost: ${port}`);

});


var routes = require('./app/routes/Routes'); //importing route
routes(app); //register the route

app.get('/', (req, res) => {
//Getting client IP: -> Testing Purpose
 res.sendFile('index.html');
});

//IP -A.P.I.
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something Went Wrong');
});


app.use(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
  res.status(404).send(JSON.stringify({status:false, url: req.originalUrl + ' is not found'}));
});
