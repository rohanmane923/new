var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from Jenkins CI/CD');
});

app.listen(3000);

module.exports = app;
