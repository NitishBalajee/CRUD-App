
var db=require('./database');
module.exports=(app) =>{
  var personController = require('./Application/person.controller');
  app.post('/person',personController.create);

  app.get('/person',personController.findall);
  app.get('/person/:id',personController.findone);
  app.put('/person/:id',personController.update);
  app.delete('/person/:id',personController.delete);


}
