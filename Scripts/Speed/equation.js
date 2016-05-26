/***************************************************************************
 *           REQUIRED ID ELEMENT                        NUM1               *
 *                                                      NUM2               *
 *                                                      SUM                *
 *                                                    OPERATION            *
 *                                                                         *
 *         REQUIRED JAVASCRIPT FILES               COLORLOGIC.JS           *
 *                                                 NUMBERLOGIC.JS          *
 *                                                   GLOBAL.JS             *
 ***************************************************************************/

 //This function display the equation onto the board.
function displayMessage(){
	// Apply chosen colors to corresponding element
	document.getElementById('num1').style.color = color[c1];
	document.getElementById('num2').style.color = color[c2];
	document.getElementById('sum').style.color = color[c3];
	// Display results
	document.getElementById('num1').innerHTML = firstNumber;
	document.getElementById('operation').innerHTML = operation[op];
	document.getElementById('num2').innerHTML = secondNumber;
	document.getElementById('sum').innerHTML = sum;
}
//This function generates the question using the logics provided, then display them to the user.
function generateQuestion(){
	generateColor();
	generateNumber();
	displayMessage();
}