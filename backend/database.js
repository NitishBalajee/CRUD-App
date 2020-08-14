var mongoose=require('mongoose');
var config=require('./config/databaseconfig');
mongoose.Promise= global.Promise;
mongoose.connect(config.url).then(() => {
  console.log("connected successfully");
  console.log("test");
});
