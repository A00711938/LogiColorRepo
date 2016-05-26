/***************************************************************************
 *           REQUIRED ID ELEMENT                       HINTS               *
 *                                                                         *
 *         REQUIRED JAVASCRIPT FILES               COLORLOGIC.JS           *
 *                                                 NUMBERLOGIC.JS          *
 *                                                   GLOBAL.JS             *
 ***************************************************************************/

//This functions will display the hints according to the user's answer and the question's answer. 
function hint(bool){
	/** SWITCH THIS STATEMENT TO TRUE IF WANT TO SHOW MORE ACCURATE HINT */
	var showAnswer = false;
	var hints = document.getElementById('hints');
	/** ADD IN THIS PART IF NEED THE HINT BAR TO SAY CORRECT. BUT REDUNDANT IN MESSAGE BOX ALREADY.
	if(bool == (colorCheck() && numberCheck())){
		document.getElementById('hints').innerHTML = "Correct!";
		return;
	}
	*/
	hints.innerHTML = "";
	//Checks if the user got a color logic error.
	if(bool != colorCheck()){
		hints.innerHTML += showAnswer ? color[c1] + operation[op] + color[c2] + " = " + color[c3] : "Color Logic Error";
		//This only appear if there are both error compared to user's answer.
		hints.innerHTML += colorCheck() == numberCheck() ? " AND " : "";
	}
	//Checks if the user got a number logic error.
	if(bool != numberCheck())
		hints.innerHTML += showAnswer ? firstNumber + operation[op] + secondNumber + " = " + sum : "Number Logic Error";
}