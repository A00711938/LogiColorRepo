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
	document.getElementById('sum').innerHTML = sum;
} // end displayMessage


function generateQuestion(){
	generateColor();
	generateEasyShapes();
	document.getElementById('operation').innerHTML = operation[op];
	document.getElementById('equal').innerHTML = " = ";
}