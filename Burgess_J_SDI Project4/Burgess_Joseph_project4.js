//alert("JavaScript works!");

/* Joseph Burgess
	SDI 1308
	Project 4
*/



 //String Function Library for aaa@bbb.ccc
	
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

// Number Function 2
// Given a string version of a number, such as "42" return the value as an actual Number data type such as 42.
	var stringToNum = function (stringToNumber) {
	return parseFloat(stringToNumber);
	};
	

		
	/*		// Is the string a URL (Does it start with http:// or https://.
	function validateURL(url) {
	if (url.substring(0,7) === "http://" + url.substring(0,8) === "https://");
		return false;
		} else {
			return true;
			}
	*/
	
console.log(checkEmail ("joeburgess@fullsail.edu"));
var cash= 10.2;
console.log(checkDecimals(cash));

var url1 = "http://fullsail.edu";
var url2 = "http:fullsail.edu";
console.log("function checkURL");
console.log("input," + (url1));
console.log("output is " + checkURL(url1));
console.log("input, " + url2);
console.log("output is" + checkURL(url2));








