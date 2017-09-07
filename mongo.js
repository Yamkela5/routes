var mongoose = require('mongoose');
const MongoURL =process.env.MONGO_DB_URL || "mongodb://localhost/Greeteds";
mongoose.connect(MongoURL, {
  useMongoClient: true
});
//yash
exports.NameStorage = mongoose.model('NameStorage', {
  count: Number,
  name: String
 });
