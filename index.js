var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var flash =require('express-flash');
var session=require('express-session')
var greeted=[];
var users=[];
// var RadioButton=[];

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(express.static('public'));

// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//creating  get router that greets different users
 // app.get('/greetings/:GreetedNames', function(req, res){
 //    greeted.push(req.params.GreetedNames);
 //
 //    console.log(req.params.GreetedNames);
 //    console.log(greeted);
 //
 //    res.send('Hello, ' + req.params.GreetedNames);
 //  });
  //creating an app that will display the greeted users
app.get('/greeted', function(req, res){

//  console.log("==================");
  console.log(greeted);

  res.render('./index', {users:greeted});

});

//create an HTML form
app.get('/users/greet', function(req, res){
  res.render('./greet');

//  console.log("==================");
  console.log(greeted);

});


app.post('/users/greet', function(req, res){
  var name=req.body.name
  var language =req.body.language;
  var greetingMessage='';
  //var TextBox='';
if (language==='TshiVenda') {
  greetingMessage='Ndaa ,' + name
}
else if (language ==='French') {
  greetingMessage='Bonjour ,' + name
}
else if (language ==='English') {
  greetingMessage='Hello ,' + name
}
  // users.push(name)
  res.render('./greet',{msg: greetingMessage});

//  console.log("==================");
console.log(greetingMessage);
  // console.log(name);


});

// function RadioButton(language) {
//   if (language==='TshiVenda') {
//     return 'Molo ,' + name
//   }
// }


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
