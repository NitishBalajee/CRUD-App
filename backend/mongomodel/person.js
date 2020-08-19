var mongoose=require('mongoose');
var PersonSchema = new mongoose.Schema({
  name: String,
  job_desc: String,

});
mongoose.model('Person', PersonSchema);

module.exports = mongoose.model('Person');
