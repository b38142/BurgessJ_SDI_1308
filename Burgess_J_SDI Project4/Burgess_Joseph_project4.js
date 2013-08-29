//alert("JavaScript works!");

/* Joseph Burgess
	SDI 1308
	Project 4
*/



// String Function Library for aaa@bbb.ccc
	
	var checkEmail = function(email1) {
		var email = email1,
			checkAtSign = 0,
			checkPeriod = 0;
			
			checkAtSign = email.indexOf("@");
			checkPeriod = email.indexOf(".");
				
			if (checkAtSign != -1 + checkPeriod !=-1) {
			if (checkAtSign < checkPeriod) {
				if (checkPeriod - checkAtSign !=1) {
					return (email + " is valid. " );
					}
					else {
					return (email + " is not valid. "); }
	}
		else {
		return (email + " is not valid. "); }
	}
	else {
		return (email + " is not valid. "); }
	}; //End of aaa@bbb.cccc function
	
	//Number Function
// Format a number to use a specific number of decimal places, as for money:2.1 -->2.10.
	var checkDecimals = function (num) {
	return num.toFixed(2);
	}



console.log(checkEmail ("joeburgess@fullsail.edu"));
var cash= 10.2;
console.log(checkDecimals(cash));






