//alert("JavaScript works!");



// Joseph B Burgess
// Project 3
// SDI 1308


// convert javascript object a string
var jsonstring = JSON.stringify(jsonCarInfo);


//convert string to a javascript object
var receivedjson = JSON.parse(jsonstring);


//Global variables
var carSalesman = "Henry" ,
vehicleId = receivedjson["cars"];
sellingCars = true;

//my object
var carSalesman = {
	name:	"Henry Shellfish",
	title:	"Car Salesman" ,
	previousJobs: ["Grand Strand Nissan" , "Drive Time" , "Carmax"],
	say: function(message) {
		var quotes = "\"";
		announcement = quotes + message + quotes;
		console.log(announcement);
	},
	carCheckList: function(sellingCars) {
		var carDetails = sellingCars;
		if (carDetails === true) {
			carSalesman.say("You ready to see what it takes to be a " + sellingCars + " car salesman.");
			carSalesman.carNum(carDetails, vehicleId);
		} else {
			carSalesman.say('Today\'s not a good month for sales. Sometimes I hate being a ' + sellingCars);
		}; // End my object
	},
	// Adding Method procedure
	carNum: function(carDetails, vehicleId) {
		if (carDetails === true) {
			carSalesman.say( "I say we start with checking our inventory.");
			for ( var n=1; n <= vehicleId.length; n++){
				var carsToGas = n;
				carSalesman.say(carsToGas);
			}
			carSalesman.say(" cars that need to be gassed up. ");
			return carDetails;
		} else {
			carSalesman.say("Fancy that, their already full!");
		};
	},
	retrieveCarName: function(name){
		var carName = name;
		return carName;
	}, // End of Method procedure

//		Method Accessor
	retrieveData: function(json) {
		var i = 0;
		while (i<json.cars.length){
			var car = json.cars[i];
			carSalesman.say("The vin # for the " + car.names + " is " + car.vinNum + " it uses " + car.fuel + " fuel.");
			i++;
		};
		return json;
	},
	retrieveCars: function() {
		for (var n=0; n < receivedjson["cars"].length; n++) {
			var names = receivedjson["cars"][n].name;
			carSalesman.say('We\'ll gas up the ' + name + 'now.');// End of string
		}

	},		
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
		var pumpGas = " If everything is OK, please pump " + fuel + " in the " + name + ".";
		carSalesman.say(pumpGas);
	},

	// method Function
	carfuel: function(gas){
		carSalesman.say(" Ya know, it's too hot for all this. How about we gas up these then call it a day.");
		/*
		var vehicles = vehicles.length;
		for (var vehicleGassed=0; vehicleGassed < vehicles; vehicleGassed +=1) {
			carSalesman.say(vehicleGassed + " vehicles are gassed up! ");
			if (vehicles > vehiclesCleaned) {
				var vehiclesLeft= vehicles - VehiclesGassed;
				carSalesman.say(vehiclesLeft + "waiting to be topped off.");
			};
		}
		*/ // Function was not working. wasted too much time on it. Basically vehicles is obsolete
		carSalesman.say(" OK, enough fun and games. Let's go home.");
	},
	retrieveName: function(carInfo){
		return carInfo.ownerName;
	},
	car : {
		ownerName: 'Joe',
		fuel: "Plus",
		names: "Maxima",
		vinNum: "12342013006",
		spill: function(car,fuel) {
			var fuelSpill = " spilled " + fuel + "on the ground.";
			console.log(fuelSpill);
			return fuelSpill;
		}
	}
};

//Finally adding in the rest of my bullet points/story
carSalesman.say ("Thank you for coming to " + carSalesman.previousJobs[0] + ". I will be your " + carSalesman.title + ", \"he quips\".");
carSalesman.carCheckList(sellingCars);
carSalesman.say("Ok, this is our checklist.");
carSalesman.retrieveData(jsonCarInfo);
var userName = carSalesman.retrieveName(carSalesman.car); // linked to Accessor above
var fuel = carSalesman.car.fuel;
carSalesman.say(" Ok, only one vehicle will use the " + fuel + ".");
carSalesman.retrieveCars();
carSalesman.carGas("Maxima", fuel);

carSalesman.carfuel();