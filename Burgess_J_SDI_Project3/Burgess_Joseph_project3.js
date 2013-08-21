//alert("JavaScript works!");



// Joseph B Burgess
// Project 3
// SDI 1308




// Accessor Method:

// After purchasing my car from the dealership and becoming chummy with my salesman. He allowed me
//to shadow him for a day. He showed me where new and used cars are washed and gassed up for customers.


// var Test from the Homework example:
var handleData = function(json) {
console.log ( "Hello, everyone");

};

handleData()

// convert javascript object a string
var jsonstring = JSON.stringify(jsonCarInfo);
console.log(jsonstring);


// convert string to a javascript object
var receivedjson = JSON.parsel(jsonstring);

// Global variables
var salesman = "Henry" ,
	carNumber = receivedjson["cars"];
	sellingCars = true;
	
// my object
var carSalesman = {
	name:		"Henry Shellfish",// property
	title:	"Car Salesman" ,
	previousJobs: ["Grand Strand Nissan" , "Drive Time" , "Carmax"],
	say: function(message) {
	var quotes = "\"";
	announcement = quotes + message + quotes;
	console.log(announcement);
	},
	carCheckList: function(carsWeNeedToMove) {
		var carDetails = carsWeNeedToMove;
		if (carDetails === true) {
			carSalesman.say("You ready to see what it takes to be a" + sellingCars + " car salesman.");
			carSalesman.carNum(carDetails, vehicleId);
			}else{
		carSalesman.say('Today\'s not a good month for sales.');
		}; // End my object
},
};
		