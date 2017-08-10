var express = require('express');
var exphbs = require('express-handlebars')
var app = express();

var greeted=[];
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
//creating  get router that greets different users
 app.get('/greetings/:GreetedNames', function(req, res){
    greeted.push(req.params.GreetedNames);

    console.log(req.params.GreetedNames);
    console.log(greeted);

    res.send('Hello, ' + req.params.GreetedNames);
  });
  //creating an app that will display the greeted users
app.get('/greeted', function(req, res){

  console.log("==================");
  console.log(greeted);

  res.render('users/index', {users:greeted});

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
