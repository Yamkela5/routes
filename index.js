var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var Models = require('./models/user');
var models = Models();

mongoose.connect('mongodb://localhost/Routes');
var db = mongoose.connection;
//throw err

db.on('error', console.error.bind(console, 'connection error:'));



app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


var List = [];
var Obj = {};

function Languages(language) {
    if (language === "TshiVenda") {
        return "Ndaa, "
    } else if (language === "English") {
        return "Hello, "
    } else if (language === "French") {
        return "Bonjour, "
    }
}

function Personas(name) {
    if (Obj[name] === undefined) {
        List.push(name);
        Obj[name] = 1;
      //  counter++
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
    //  name = req.body.name;


    var userData = {

          name : req.body.name,

        };

      var language = req.body.language;



        // use schema's `create` method to insert document into Mongo

        models.User.create(userData, function (error, results) {
          console.log(results);
          if (error) {
            return next(error);
          } else {
            //req.session.userId = user._id;
            //return res.redirect('/greeted');
            console.log(userData.name);
          }
        });
    res.render('add', {
        name: Personas(userData.name),
        language: Languages(language),
      //  counter: counter
    });
});

app.get('/greeted', function(req, res) {
    res.render("greeted", {
        Greeted: List
    });
});

//creating a counter route
app.get('/counter/:names', function(req, res){
  var user = req.params.GreetedPersonas;
  var names = req.params.names;
  var countUsers ={};
  for(i=0; i<List.length; i++){
    var counting = List[i];
    countUsers[counting]=countUsers[counting] ? countUsers[counting]+1:1;
  }
  res.send('Hello, ' + names + ' has been greeted ' + countUsers[counting] +' time(s)!');

})
app.set('port',(process.env.PORT || 5000) );

app.listen(app.get('port'), function(){
  console.log("Web app started on port: ", app.get('port'));
});
