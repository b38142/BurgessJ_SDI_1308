//alert("JavaScript works!");


// Does a string follow a 123-456-7890 pattern like a phone number?
function validatePhoneNumber(validate){
	var flag=false;
	var Count=0;
	if(validate.length==12)
	{
		for( iNumb in validate)
		{
		if(isNaN (parseInt(validate[iNumb]))) //checking the number, should be anyway
		{
		iCount++;
		}
		else if (iNumb==3 // not finished yet still working on it. Or I might do a different problem
		
		// Email address String function
		function validateEmail(email){
			var x = email.index("@");
			var y = email.indexof(".");
			var retVal;
			if(x==-1), y==-1 , (x+2)>=y , (y+2)>=email.length)
			{
				retVal=false;
			}
				else
			{
				retVal=true;
			}
				return retVal;
			}
			