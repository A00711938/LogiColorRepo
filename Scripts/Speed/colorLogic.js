/***************************************************************************
 *         REQUIRED JAVASCRIPT FILES                 GLOBAL.JS             *
 ***************************************************************************/
 
//This fuction will generate the color part of the equation.
//Currently the answer will generate at 71% correctness
function generateColor() {
	//Selecting the color generation by random.
	var choice = Math.floor(Math.random() * 100);
	//Selecting the operand by random.
	op = Math.floor(Math.random() * 2);
	do{
		if(choice < 71){//CORRECT COLOR (forcebly)
			if(!op){	//ADDITION
				//Obtain the final color.
				var rand = Math.floor(Math.random() * 9);
				c1 = rand == 0 ? 15 : rand;
				do{
					c2 = Math.floor(Math.random() * 9);
					c2 = c2 == 0 ? 15 : c2;
				} while (!isValid());
				//Determine the outcome depend on the first two color.
				c3 = b2d(add(d2b(c1), d2b(c2)));
			} else {	//SUBTRACTION
				//Obtain the first color
				var rand = Math.floor(Math.random() * 9);
				c1 = rand == 0 ? 15 : rand;
				//Keep rolling second color as long as it is bigger than the first.
				do{
					c2 = Math.floor(Math.random() * 9);
					c2 = c2 == 0 ? 15 : c2;
				} while (c2 > c1 && (c1 == 15 && (c2 != 7 || c2 != 8)));
				//Determine the outcome depend on the first two color.
				c3 = b2d(minus(d2b(c1), d2b(c2)));
			}
		} else {//INCORRECT COLOR (mostly)
			//Generate all 3 color randomly.
			//Looping the algorithm again when the random generated a correct statement.
			do{
				c1 = Math.floor(Math.random() * 9);
				c2 = Math.floor(Math.random() * 9);
				c3 = Math.floor(Math.random() * 9);
				c1 = c1 == 0 ? 15 : c1;
				c2 = c2 == 0 ? 15 : c2;
				c3 = c3 == 0 ? 15 : c3;
			} while(colorCheck(op, c1, c2, c3));
		}
	} while(!isValid());
}
//This function checks if the color equation is correct or not
function colorCheck(){
	return	op ? c3 == b2d(minus(d2b(c1), d2b(c2))):
				(c1 == c2 && c2 == c3) || (c3 == b2d(add(d2b(c1), d2b(c2))));
}
//THIS FUNCTION VALIDATES IF THE EQUATION ARE SHOWABLE ON SCREEN. ADD/REMOVE RESTRICTIONS IF NEEDED.
function isValid(){
	if(op){ //CHECK MINUS STATEMENT
		if(isSame()) 		return false;						//This checks if both colors are same.
		if(isWhite(c1)) 	return false;						//This checks if the first color is white.
		if(isOxy())	 		return false;						//This checks if the secondary color can be minus by primary.
		if(isGrey(c2))		return false;						//This checks if the second color is grey.
		if(isGrey(c1))		return (isWhite(c2) || isBlack(c2));//This checks if the second is a component of grey as first color.
		if(isBlack(c1))	 	return !(isWhite(c2) || isGrey(c2));//This checks if the combination are minus-able from black.
		if(isWhat(1, c1))	return false;						//This checks if the first color is primary.
		return !(isWhat(2, c1) && isWhat(2, c2))				//This checks if both colors are secondary.
	} else {//CHECK ADD STATEMENT
		if(containsGrey())	return isSame();					//This checks if both are grey.
		if(containsWhite()) return (isSame() || containsBlack());//This checks if both are white or is a white black combination.
	}
	return true;
}

/** THE FUNCTIONS BELOW ARE UTILITY FUNCTION FOR THIS JAVASCRIPT */

//THIS CHECKS IF THE FIRST TWO COLORS HAVE WHITE
function containsWhite(){
	return (c1 == 8) || (c2 == 8);
}
//THIS CHECKS IF THE FIRST TWO COLORS HAVE BLACK
function containsBlack(){
	return (c1 == 7) || (c2 == 7);
}
//THIS CHECK IF THE FIRST TWO COLORS HAVE GREY
function containsGrey(){
	return (c1 == 15) || (c2 == 15);
}
//option = 1 for check primary, option = 2 for check secondary, on the colorChoice.
function isWhat(option, colorChoice){
	var one = 0, index = 3;
	var string = d2b(colorChoice);
	do{
		one += string[index] == "1" ? 1 : 0;
	} while(index-- > 1);
	return one == option;
}
//THIS CHECKS IF THE FIRST TWO COLORS ARE SAME
function isSame(){
	return c1 === c2;
}
//THIS CHECKS IF THE COLOR IS WHITE
function isWhite(binary){
	return binary == 8;
}
//THIS CHECKS IF THE COLOR IS BLACK
function isBlack(binary){
	return binary == 7;
}
//THIS CHECKS IF THE COLOR IS GREY
function isGrey(binary){
	return binary == 15;
}
//THIS CHECKS IF THE TWO COLORS ARE NOT TO FORM TRUE
function isOxy(){
	return d2b(c1) == opposite(c2);
}
//THIS FLIPS THE BIT
function opposite(decimal){
	var binary = d2b(decimal);
	var string = "0", index = 1;
	do{
		string += binary[index] == "1" ? "0" : "1";
	} while(index++ < 3);
	return string;
}
//THIS TURNS DECIMAL TO BINARY
function d2b(decimal){
	var string = (decimal >>> 0).toString(2);
	while(string.length < 4)
		string = "0" + string;
	return string;
}
//THIS TURNS BINARY TO DECIMAL
function b2d(binary){
	return parseInt(binary, 2);
}
//THIS RETURNS A BINARY THAT IS USING OR
function add(stringA, stringB){
	var index = 0;
    var stringC = "";
	do{
		stringC += (stringA[index] == "1" || stringB[index] == "1") ? "1" : "0"; 
	} while(index++ < 3);
	return stringC;
}
//THIS RETURNS A BINARY THAT IS USING XOR
function minus(stringA, stringB){
	var index = 0;
	var stringC = "";
	do{
		stringC += (stringA[index] != stringB[index] ? "1" : "0");
	} while(index++ < 3);
	return stringC;
}