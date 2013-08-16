alert("JavaScript works!");


// Joseph B Burgess
// Project 2
// SDI 1308
// Functions, Arguments, and Returns & Loops!


//Variables below.

var suvs = [ " Nissan Pathfinder" , "Honda Pilot" , " Toyota Sequoia" , " Ford Expedition" , " Yukon Denali"];
var vehiclePerks = [ " DVD " , " Dual DVD" , " rear camera" , "seating compacity" , " Around View Monitor"];
var carDealerships = new Array(" Grand Strand Nissan" , " Carmax" , "Sparks Toyota" , " Drivetime"); 
var wantANewCar = true;


//This function starts my story starts I'm hoping this covers my Boolean function with my simple 6x1 math. If not I will attempt it later on in my Story.
function tradeInCarYears (aNum) {
	return aNum*6;
} //End of this function.
//console.log(" I keep my car roughly" + tradeInCarYears(1) + ".");

// Procedure function
var write = function (message){
console.log(message);
}; // End of function

//Start telling my story.
write('Hello, I\'m currently driving a 2008' + suvs[0] + ". I usually keep a car roughly, " + tradeInCarYears(1) + " years or so.");

var previousVehicles = [3,6,6];

write(" My previous vehicles were a" + suvs[3] + " and a " + suvs[1] + "."); // string concatenation in here.

// Conditionals
if (wantANewCar=== true) {
	console.log( " Interest rates are still at a record low. ");
	console.log(' Ok, my minds made up, I\'m getting a new car! ');
	}  else {
		console.log(" Hey, am I doing the right thing here? ");
		console.log("  Let me think about this some more. "); 
}; // End of Conditional
console.log( "First I need to go to a dealership." + carDealerships[0] + " seems like a good start!");
console.log( "There are a few requirements that the vehicle must have. First");

// OK, trying that function again. I'm going to sub-out "x" this time. Wish me luck!
function factoryTint(x){
	console.log( "it must "  + x );
}

factoryTint("have factory tint"); // "Ring, Ring". I called it! You know, my function. Hey, I got it from you. 
factoryTint("have a navigation system, ");
factoryTint("have leather seating and an extended warranty. "); // Ok, passing the information 3 times.

function luxrySuvs(xboxOne, ps4){
	console.log( "The" + suvs[0] + " looked great; however, the" + xboxOne + " really impressed me! The" + ps4 + "was impressive as well.");  
}
	
luxrySuvs(" Infiniti Qx" , " Mercedes-Benz GL Class "); 
console.log('If I had ' + subtractNumbers (4,2) + ' choices I would\'ve said... ');
luxrySuvs(" Lexus LX 570" , " Yukon Denali Hybrid "); // This was me passing information into my parameters.

// I believe the a & b below would be my arguments.
function subtractNumbers(a,b) {
	var c = a-b;
	return c;
}
console.log ( "OK, now I can eliminate " + subtractNumbers (4,2) + " vehicles from my list of potentials.");// Return Value.

function writeFirst(){
	console.log('I\'ve been here for awhile and the salesman\'s really pressing me to purchase something. ');
} //End of writeFirst function
  
function writeSecond(){
	console.log( "Decisions, decisions.... ");
} //End of writeSecond function

function combineFunctions(){
	writeSecond();
	writeFirst();
} //This function will combine any functions I place in it. Could save me some space later on once I learn how to code a lot better... And quicker. I'm so sloooow...

combineFunctions();

var standYourGround = function (salesman, pressure) {
	for (i = salesman; i < 0; i-=5) {
	console.log(i);
};
if (pressure[0] === 'I\'m not ready to make a decision just yet' && pressure[1] === 'I\'m going to wait awhile.'); {
	var decisionChoice = [" Yes, I'm ready now!" , " Let's move forward! "];
	return decisionChoice;
};

var rebuttal = standYourGround();
console.log( "Salesman said, \" so can I get you to sign on the dotted line? " + decisionChoice + "," + decisionChoice);
};

var arrFinaldemands = ["0% interest rate" , " free lifetime oil changes" , " a rental car when my car is in the shop" , " XM radio. "];
var arrFunction = function(arrArgument) {
	var arrElements = arrArgument.length;
	for (var i = 0; i < arrElements; i = i + 1) {
	
		console.log((i + 1) + " I must have " + arrArgument[i]);
		};
		arrArgument.push(" a $5,000 factory rebate. ");
		
		return arrArgument; // Return Array
		
		} // End of arrFunction
		
console.log( "Wait! Sorry, I left off something. " + arrFunction(arrFinaldemands));

console.log('Yes, that\'s the one big difference between me buying or not, again that\'s ' + arrFinaldemands);

var signHere = function(paperworkNum) {
//While loop
	while (paperworkNum > 0) {
	
		console.log("paperwork " + paperworkNum + " must be completed.");
		console.log("paperwork " + paperworkNum + " is complete!");
		console.log("wer'e inching closer...");
		
		paperworkNum = paperworkNum - 1;
		
		if (paperworkNum > 0) {
			console.log("must be completed." + paperworkNum);
			} else {
				console.log( "Congratulations! You've just been suckered into purchasing a new car!");
				}
				console.log(" ");
				}; //End of while loop
				
				return paperworkNum;
				} // End of signHere.
				
				signHere(10);
				
			
			


