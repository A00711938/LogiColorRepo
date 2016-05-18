/******************************************************************
 *     THIS NEEDS THE FOLLOWING: COLORLOGIC.JS NUMBERLOGIC.JS     *
 ******************************************************************/

function displayMessage(){
	document.getElementById('actionBox').innerHTML = "Display Message Called";
	// Apply chosen colors to corresponding element
	document.getElementById('num1').style.color = color[c1];
	document.getElementById('num2').style.color = color[c2];
	document.getElementById('sum').style.color = color[c3];
	document.getElementById('actionBox').innerHTML = "Display Message #2 Called";
	// Display results
	document.getElementById('num1').innerHTML = firstNumber;
	document.getElementById('operation').innerHTML = operation[op];
	document.getElementById('num2').innerHTML = secondNumber;
	if (op == 0) {
		document.getElementById('sum').innerHTML = sum;
	} else {
		document.getElementById('sum').innerHTML = sum;

	}
	
	document.getElementById('actionBox').innerHTML = "Display Message Finished";
} // end displayMessage

function generateQuestion(){
	document.getElementById('actionBox').innerHTML = "Action called";
	
	generateColor();
	generateNumber();
	displayMessage();
	
	result();
	
	document.getElementById('actionBox').innerHTML = "Generating Questions";
}

function result(){
	document.getElementById('result').innerHTML = "The color is " + colorCheck() + "<br/>The number is " + numberCheck() +
												  "<br/>Therefore, it is " + (colorCheck() && numberCheck());
}