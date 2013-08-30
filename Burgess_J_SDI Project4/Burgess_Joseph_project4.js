//alert("JavaScript works!");

/* Joseph Burgess
	SDI 1308
	Project 4
*/



 //String Function Library for aaa@bbb.ccc •1
	
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
	}; 													//End of aaa@bbb.cccc function
	
	
	
	//Number Function  •2
// Format a number to use a specific number of decimal places, as for money:2.1 -->2.10.
	var checkDecimals = function (num) {
	return num.toFixed(2); 
	}	// End Number function
	
	
var joesFunclibrary = function() {

// Number Function 2   •3
//Given a string version of a number, such as "42" return the value as an actual Number data type such as 42.
	var convertString = function(string) {
	var dheckNumb = string -0;
		return checkNumb	}; // End Number function2
	
	};

		
	/*		// Is the string a URL (Does it start with http:// or https://.		•4
	function validateURL(url) {
	if (url.substring(0,7) === "http://" + url.substring(0,8) === "https://");
		return false;
		} else {
			return true;
			}
	*/
	
	
	/*return {
			"convertString": convertString
			};
			
			*/
				//
				
			//}
/*// Function to find the number above or below a number within a certain percent •5

function fuzzyMatch(val1,val,per)
{
	var 
	
} // 


// Function to Parse Number •6
function stringToNumber(val)
{
	var retVal;
	if(typeof val=='number')
	{
		alert("Already a number :"+val);
	}
	else
	{
		alert("Converted from String to Number :"+val);
		retVal = parseInt(val);
	}
	return retVal; //End of Parse 
	

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
//console.log(joesFuncLibrary.convertString("42");






