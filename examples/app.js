/*eslint-disable */

var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index');
});

app.use(express.static(path.resolve(__dirname, './')));

app.listen(process.env.PORT || 1337);
