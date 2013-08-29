//alert("JavaScript works!");

/* Joseph Burgess
	SDI 1308
	Project 4
*/



// String Functions Library for aaa@bbb.ccc
	
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
	};



console.log(checkEmail ("joeburgess@fullsail.edu"));
