var mongoose=require('mongoose');
var config=require('./config/databaseconfig');
mongoose.Promise= global.Promise;
mongoose.connect(config.url).then(() => {
  
  console.log("test3");
  console.log("connect successfully");
  console.log("test2");
});
