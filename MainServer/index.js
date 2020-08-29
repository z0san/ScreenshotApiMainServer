var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

var upload = multer();


//load config
const config = require('./config');

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

//enable stylesheets
app.use('/resources', express.static('resources'));

//Require the Router we defined in movies.js
var download = require('./screenshots.js');

//Use the Router on the sub route /movies
app.use('/imagefetcher', download);

//handels homepage and redirects to ssdownload for testing purposes
app.get('/', function(req, res){
  res.redirect('/imageFetcher');
});


app.listen(3000);
