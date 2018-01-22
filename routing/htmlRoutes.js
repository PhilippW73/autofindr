// GET Route to survey that should display survey page
// Default, catch all route that leads to home.html
var path = require("path");

function htmlfy (app){

	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.get("/:characters", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};

module.exports = htmlfy; 

//..

