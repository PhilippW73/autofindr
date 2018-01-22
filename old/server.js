var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require("./routing/apiRoutes.js");
var htmlRoutes = require("./routing/htmlRoutes.js");

var app = express(); // this is a function call

var PORT =  process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var newSurvey = [];

apiRoutes(app);
htmlRoutes(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
