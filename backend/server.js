const express = require('express');
const bodyParser = require('body-parser');
/////////////////////
// create express app
const app = express();
var cors=require('cors');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
var port=3000;
app.use(cors({origin: 'http://localhost:4200'}));
require('./app.js')(app);


app.listen(port,function(){
  console.log("Listening on port "+ port)
});
