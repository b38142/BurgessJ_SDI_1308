//alert("JavaScript works!");



// Joseph B Burgess
// Project 3
// SDI 1308



// convert javascript object a string
var jsonstring = JSON.stringify(jsonCarInfo);
console.log(jsonstring);


// convert string to a javascript object
var receivedjson = JSON.parsel(jsonstring);

// Global variables
var carSalesman = "Henry" ,
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
	// Adding Method procedure
		CarNum: function(carDetails, vehicleId) {
			if (carDetails === true) {
			carSalesman.say( "I say we start with checking our inventory.");
			for ( var n=0; n<=vehicleId; n++){
			var carsToWash = n;
			carSalesman.say(carsToWash);
			}
			carSalesman.say(" cars that need to be washed. ");
			return carDetails;
			} else {
			carSalesman.say("Fancy that, their already clean!");
			};
},
	retreiveCarName: function(name){
		var carName = name;
		return carName;
		}, // End of Method procedure
		
	//method Function
	carwash: function(wash){
		carSalesman.say(" Ya know, it's too hot to wash cars today. How about we gas up these" + vehicles);
		var vehicles = vehicles.length;
		for (var vehicleGassed=0; vehicleGassed < vehicles; vehicleGassed +=1) {
		carSalesman.say(vehicleGassed + " vehicles are gassed up! ");
		if (vehicles > vehiclesCleaned) {
			var vehiclesLeft= vehicles - VehiclesGassed;
			carSalesman.say(vehiclesLeft + "waiting to be topped off.");
			};
}// Method Accessor
	retreiveData: function(json) {
		var i = 0;
		while (i<json.cars.length){
			var car = json.cars[i];
			carSalesman.say("The vin # for" + cars.name + "is" + cars.vinNum + "it uses" + cars.fuel + "fuel.");
			i++;
		};
		return json;
	},
	retreiveCars: function() {
	for (var n=0; n < receivedjson["cars"].length;n++) {
		var name = receivedjson["cars"][n].name;
		carSalesman.say('We\'ll gas up the' + name + "now.");// End of string
		}
		};
			
	// Method Mutator
	carGas: function(name, fuel){
	var gasTank = [];
	var pumpGas = function(item) {
		if (item == fuel) {
			gasTank.push(item);
			carSalesman.say(gasTank);
		} else {
			carSalesman.say("Uhm, make sure you double check your fuel type....");
			}
		}
		var pumpGas = " If everything is OK, please pump " + fuel + "in the " + name + ".";
		carSalesman.say(pumpGas);
		}
	},

	
		