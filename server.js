var express = require('express');
var app = express();

// create a route
// app.get('/', function (req, res) {
//  res.send('Hello World!');
//  });

 app.get('/greetings/:GreetedNames', function (req, res) {
   console.log(req.params.GreetedNames);
  res.send("Hello," + req.params.GreetedNames);
  });


//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Greeting app listening at http://%s:%s', host, port);

});
