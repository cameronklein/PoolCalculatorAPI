var express = require('express')
var app = express();

app.get('/', function(req, res) {
  console.log("Success!");
  res.json("Hello");
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server listening on ' + app.get('port'));
});
