// GET route with the url /api / friends.. this will be used to display JSON of all possible friends
// POST routes /api/friends.. This will be used to handle incoming survey results. this route will also be used to handle the compatibility logic

var bodyParser = require("body-parser");



var carsArray = require("../data/car.js");

function expressify(app) {

    app.get("/api/cars", function(req, res) {
        res.json(carsArray);

    });

    app.post("/api/cars", function(req, res) {
                
                //hold new data from array
                var newArray = req.body;
                var newName = newArray.name;
                var newPhto = newArray.photo;
                var newScores = newArray.scores;
                console.log(newArray);

                	//set up variable for best car.. will be populated as I go on
                    var bestCar = {
                        name: "",
                        photo: "",
                        carDifference: 40
                    };

                    //difference for calculation
					var difference = 0;
                    
                    // for loop through the carsArray
                    for (var i = 0; i < carsArray.length; i++) {

                    	console.log(carsArray[i].name);
                    	difference = 0;

                    	//for loop through the scores in carsArray
                        for (var j = 0; j < carsArray[i].scores[j]; j++) {
                        	console.log(carsArray[4].scores[4]);

                        	//calculate the differences for each score and parseInt
                          	difference += Math.abs(parseInt(newScores[j]) - parseInt(carsArray[i].scores[j]));

								//check difference vs starting best car difference
                                if (difference <= bestCar.carDifference) {

                                    bestCar.name = carsArray[i].name;
                                    bestCar.photo = carsArray[i].photo;
                                    bestCar.carDifference = difference;
                                }
                            }
                        }

                        //send best car data to html
                     	res.json(bestCar);

                    });
            };

            module.exports = expressify;


            // get form data
                        // parse the form data for total
                        // get difference .. set variable for smallest difference and match
                        // loop through cars with above mentioned variables
                        // if difference is smaller than current difference, then reset it
                        // crab id of the match
                        // send back the object with that id