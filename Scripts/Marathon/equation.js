/******************************************************************
 *     THIS NEEDS THE FOLLOWING: COLORLOGIC.JS 					  *
 *							     SHAPESEASY.JS     			  	  *
 *							     SCORE.JS     					  *
 ******************************************************************/

function displayMessage(){
	// Apply chosen colors to corresponding element
	document.getElementById('num1').style.color = color[c1];
	document.getElementById('num2').style.color = color[c2];
	document.getElementById('sum').style.color = color[c3];
	// Display results
	updateScore();
	document.getElementById('num1').innerHTML = firstNumber;
	document.getElementById('operation').innerHTML = operation[op];
	document.getElementById('num2').innerHTML = secondNumber;
	document.getElementById('equal').innerHTML = " = ";
	document.getElementById('sum').innerHTML = sum;
} // end displayMessage


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