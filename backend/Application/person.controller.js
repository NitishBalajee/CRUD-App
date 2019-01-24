var Person  = require('../mongomodel/person');

exports.create=function(req,res){
  var person = new Person({
          name: req.body.name,
          job_desc: req.body.job_desc,
      });
      person.save().then(data=>{
        res.send(data);
      });
};

exports.findall=function(req,res){
  Person.find().then(data => {
        res.send(data);
    })
};

exports.findone=function(req,res){
  Person.findById(req.params.id).then(data=>{
    if(!data){
      return res.status(404).send({
        message:"not found"
      });
    }
    else{
      res.send(data);
    }
  })
};

exports.update=function(req,res){
  Person.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    job_desc: req.body.job_desc,

  },{new:true}).then(data=>{
    if(!data){
      return res.status(404).send({message:"person not found"});
    }
    res.send(data);
  })
};

exports.delete=function(req,res){
  Person.findByIdAndRemove(req.params.id).then(data=>{
    res.send({message:"person deleted"});
  })
};
