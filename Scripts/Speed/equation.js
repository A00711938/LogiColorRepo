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
	document.getElementById('equal').innerHTML = " = ";
	document.getElementById('sum').innerHTML = sum;
}
//This function generates the question using the logics provided, then display them to the user.
function generateQuestion(){
	var questionRandomizer = Math.floor(Math.random() * 2);
	generateColor();
	if (difficulty == 0) { // Easy
		checkAnswer = 0;
		clearCanvases();
		generateNumber();
		displayMessage();
	} else if (difficulty == 1) { // Medium
		if (questionRandomizer == 0) {
			checkAnswer = 0;
			clearCanvases();
			generateNumber();
			displayMessage();
		}
		else if (questionRandomizer == 1) {
			if (op == 0) {
				checkAnswer = 1;
				document.getElementById('num1').innerHTML = "";
				document.getElementById('num2').innerHTML = "";
				document.getElementById('sum').innerHTML = "";
				generateMediumShapes();
				document.getElementById('operation').innerHTML = operation[op];
				document.getElementById('equal').innerHTML = " = ";
			} else {
				checkAnswer = 0;
				clearCanvases();
				generateNumber();
				displayMessage();
			}
		}	
	} else if (difficulty == 2) { // Colors Everywhere
		if (questionRandomizer == 0) {
			checkAnswer = 0;
			clearCanvases();
			generateNumber();
			displayMessage();
		}
		else if (questionRandomizer == 1) {
			checkAnswer = 1;
			document.getElementById('num1').innerHTML = "";
			document.getElementById('num2').innerHTML = "";
			document.getElementById('sum').innerHTML = "";
			generateShapes(op);
			document.getElementById('operation').innerHTML = operation[op];
			document.getElementById('equal').innerHTML = " = ";
		}
	}
}