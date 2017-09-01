module.exports = function(){

  var mongoose = require('mongoose')
  // var UserSchema = new mongoose.Schema({
  //   name : {
  //     type: String,
  //     unique: true,
  //     // required:true,
  //     // trim:true,
  //   }
  // })
  var User = mongoose.model('User', {name:String});


  return  {
    User
  }

}
