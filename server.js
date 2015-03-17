var express = require('express')
var app = express();

app.get('/test', function(req, res) {
  return "Hello!";
});
