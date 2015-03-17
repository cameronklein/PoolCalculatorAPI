var express = require('express')
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.MONGO_URL ||
                 process.env.MONGOLAB_URI ||
                 'mongodb://localhost/poolcalculator');

app.get('/', function(req, res) {
  console.log("Success!");
  res.json("Hello");
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server listening on ' + app.get('port'));
});
