var express = require('express');
var path = require('path');
var fs = require('fs');
var bp = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', function(req, res) {
  // TODO:Add links to index.html so users can navigate
  res.sendFile('./html/index.html');
});

app.get('/skills', function(req, res) {
  var skills = fs.readFilesSync('./data.json');
  skills = JSON.parse(skills);
  // TODO: Render this array of skills into an EJS template, need ejs file
  res.send(skills);
  });
});

// TODO: Add GET route that retursn static page containing a form

// TODO: Add POST route taht writes new skill to the file, redirexts to skills index
// TODO: Form should have action='/sills' and method='POST'
app.listen(process.env.PORT || 3000);




















//
//
//
// // code with notes
// // what do we require
// var express = require('express');
// var path = require('path');
// var fs = require('fs');
// var bp = require('body-parser');
//
//
// // sets up our app for us
// var app = express();
// // need to configure our app, ejs second perameter
// app.set('view engine', 'ejs');
// // body-parse
// app.use(bp.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'static')));
//
//
// // set up a default route
// app.get('/', function(req, res) {
//   res.sendFile('./html/index.html');
// });
//
// // set up an index route Get ALL, we are modeling our skills currently 5 skills
// app.get('/skills', function(req, res) {
//   // put some of our files systems in here, read file from disk (file we are trying to read)
//   var skills = fs.readFilesSync('./data.json');
//   // lets parse setInterval(function () {
//   skills = JSON.parse(skills);
//   res.send(skills);
//   });
// });
//
// // listen
// app.listen(process.env.PORT || 3000);
