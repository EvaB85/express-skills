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


