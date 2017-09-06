"use strict";
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MongoStorage = require('./mongo');
var app = express();
app.use(express.static('public'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

function nameSpotter(name, cb) {
  MongoStorage.NameStorage.findOne({
    name: name
  }, function(err, person) {
    if (err) {
      return cb(err);
    } else if (!person) {
      var GreetedNames = new MongoStorage.NameStorage({
        name: name,
        count: 1
      });
      GreetedNames.save(cb)
    } else if (person) {
      person.count++;
      person.save(cb);
    }
  });
};

app.get('/', function(req, res) {
  var name = req.body.name;
  res.render('index');
});
var CountNames = function(req, res) {}
app.post('/greetings', function(req, res) {
  var name = req.body.name;
  var language = req.body.language;
  var message = '';
  //declaring language and messages
  if (language === 'TshiVenda') {
    message = 'Ndaa , ' + name;
  } else if (language === 'English') {
    message = 'Hello , ' + name;
  } else if (language === 'French') {
    message = 'Bonjour , ' + name;
  }
  nameSpotter(name, function() {
    MongoStorage.NameStorage.count({}, function(err, count) {
      if (err) {
        return err;
      } else {
        res.render('index', {
          greet: message,
          number: count
        })
      }
    });
  });
});
var CountNames = function(req, res) {}
app.post('/reset', function(req, res) {
  MongoStorage.NameStorage.remove({}, function(err, remove) {
    if (err) {
      return err;
    }
    res.render('index')
  })
});
app.get('/greeted',function(req, res){
 MongoStorage.NameStorage.find({},function(err, names){
   if(err){
     console.log(err);
   }
   else {
      console.log(names);
     res.render('index',{name:names
   })
   }
 })
})


//start the server
var port = process.env.PORT || 5000
var server = app.listen(port, function() {
  console.log("Web app started on port : " + port)
});
