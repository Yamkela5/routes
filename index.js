// var express = require('express');
// var exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');
// var app = express();
// var flash =require('express-flash');
// var session=require('express-session')
// var greeted=[];
// var users=[];
// // var RadioButton=[];
//
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
//
// // parse application/x-www-form-urlencoded
// app.use(express.static('public'));
//
// // app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))
//
// // parse application/json
// app.use(bodyParser.json())
// //creating  get router that greets different users
//  // app.get('/greetings/:GreetedNames', function(req, res){
//  //    greeted.push(req.params.GreetedNames);
//  //
//  //    console.log(req.params.GreetedNames);
//  //    console.log(greeted);
//  //
//  //    res.send('Hello, ' + req.params.GreetedNames);
//  //  });
//   //creating an app that will display the greeted users
// app.get('/greeted', function(req, res){
//
// //  console.log("==================");
//   console.log(greeted);
//
//   res.render('./index', {users:greeted});
//
// });
//
// //create an HTML form
// app.get('/users/greet', function(req, res){
//   res.render('users/greet');
//
// //  console.log("==================");
//   console.log(greeted);
//
// });
//
//
// app.post('/users/greet', function(req, res){
//   var name=req.body.name
//   var language =req.body.language;
//   var greetingMessage='';
//   //var TextBox='';
// //   var clickCount = Number(localStorage.getItem('currentGreets'));
// //document.getElementById('greetCount').innerHTML = clickCount;
//
// var namesGreeted = {};
//
// for (var i = 0; i < namesGreeted.length; i++) {
//         }
//
//   function myName() {
//     'use strict';
//
//     var Yash = document.getElementById('TextBox').value;
//
//     if (document.getElementById('English').checked === true && Yash.length > 0 && namesGreeted[Yash] === undefined) {
//         namesGreeted[Yash] = 1;
//         document.getElementById('output').innerHTML = 'Hello, ' + Yash;
//
//         clickCount += 1;
//
//   } else if (document.getElementById('TshiVenda').checked === true && Yash.length > 0 && namesGreeted[Yash] === undefined) {
//         namesGreeted[Yash] = 1;
//         document.getElementById('output').innerHTML = 'Ndaa, ' + Yash;
//
//         clickCount += 1;
//
//   } else if (document.getElementById('French').checked === true && Yash.length > 0 && namesGreeted[Yash] === undefined) {
//         namesGreeted[Yash] = 1;
//         document.getElementById('output').innerHTML = 'Bonjour, ' + Yash;
//
//         clickCount += 1;
//     } else if (document.getElementById('English').checked && Yash.length > 0 && namesGreeted[Yash] !== undefined) {
//         document.getElementById('output').innerHTML = 'Hello, ' + Yash;
//     } else if (document.getElementById('TshiVenda').checked && Yash.length > 0 && namesGreeted[Yash] !== undefined) {
//         document.getElementById('output').innerHTML = 'Ndaa, ' + Yash;
//     } else if (document.getElementById('French').checked && Yash.length > 0 && namesGreeted[Yash] !== undefined) {
//         document.getElementById('output').innerHTML = 'Bonjour, ' + Yash;
//     }
//
//     document.getElementById('TextBox').value = "";
//
//     document.getElementById('greetCount').innerHTML = clickCount;
//
//     localStorage.setItem('currentGreets',  Number(clickCount));
// }
// // if (language==='TshiVenda') {
// //   greetingMessage='Ndaa ,' + name
// // }
// // else if (language ==='French') {
// //   greetingMessage='Bonjour ,' + name
// // }
// // else if (language ==='English') {
// //   greetingMessage='Hello ,' + name
// // }
//   // users.push(name)
//   res.render('users/greet',{msg: greetingMessage});
//
// //  console.log("==================");
// console.log(greetingMessage);
//   // console.log(name);
//
//
// });
//
// // function RadioButton(language) {
// //   if (language==='TshiVenda') {
// //     return 'Molo ,' + name
// //   }
// // }
//
//

var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// controller functions

// handles the language selected from the radio buttons
// returns the right language greet in
function manageLanguage(lang) {
    if (lang === "TshiVenda") {
        return "Ndaa, "
    } else if (lang === "English") {
        return "Hello, "
    } else if (lang === "Latin") {
        return "Salve, "
    }
}

// handles the names that are are greeted
var nameList = [];
var namesObj = {};
var counter = 0;

function manageName(name) {
    if (namesObj[name] === undefined) {
        nameList.push(name);
        namesObj[name] = 1;
        counter++
        return name
    } else {
      return name
    }
}

//create a route that will take different username

app.get('/', function(req, res) {
    res.redirect('/greetings')
});

app.get('/greetings', function(req, res) {
    res.render('add');
});

app.post("/greetings", function(req, res) {
    var name = req.body.name;
    var language = req.body.language;

    //  console.log(name);
    res.render('add', {
        name: manageName(name),
        language: manageLanguage(language),
        counter: counter
    });
});

app.get('/greeted', function(req, res) {
    res.render("greeted", {
        Greeted: nameList
    });
});

//creating a route that will count how many time aa person has been greeted
app.get('/counter/:names', function(req, res) {
    var names = req.params.names;

    function CounterNames(input) {
        return input == names;
    }
    var CounterNames = nameList.filter(CounterNames).length;
    res.send("Hello, " + names + ' has been greeted ' + CounterNames + ' times(s)')
});

// app.get('/counter/:names', function(req, res){
//   var user = req.params.GreetedPersonas;
//   var countUsers ={};
//   for(i=0; i<nameList.length; i++){
//     var counting = nameList[i];
//     countUsers[counting]=countUsers[counting] ? countUsers[counting]+1:1;
//   }
//   res.send('Hello, ' + names + ' has been greeted ' + countUsers[counting] +' time(s)!');
//
// })
// //start the serveer
app.set('port',(process.env.PORT || 5000) );

app.listen(app.get('port'), function(){
  console.log("Web app started on port: ", app.get('port'));
});
