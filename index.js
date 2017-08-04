var express = require('express');
var app = express();
var greeted=[];
//creating  get router that greets different users
 app.get('/greetings/:GreetedNames', function(req, res){
    res.send('Hello, ' +req.params.GreetedNames);
    greeted.push(req.params.GreetedNames);
    console.log(req.params.GreetedNames);
  });
  //creating an app that will display the greeted users
app.get('/greeted', function(req, res){
  res.send(greeted);
  console.log(greeted);
});
app.get('/counter/:GreetedPersonas', function(req, res){
  var user = req.params.GreetedPersonas;
  var countUsers ={};
  for(i=0; i<greeted.length; i++){
    var counting = greeted[i];
    countUsers[counting]=countUsers[counting] ? countUsers[counting]+1:1;
  }
  res.send('Hello, ' + user + ' has been greeted ' + countUsers[counting] +' time(s)!');

})

//start the server
 var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
console.log('Greeting app listening at http://%s:%s', host, port);


 });
