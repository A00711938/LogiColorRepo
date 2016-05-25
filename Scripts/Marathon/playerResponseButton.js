/******************************************************************
 *            THIS NEEDS THE FOLLOWING: COLORLOGIC.JS             *
 *                                      NUMBERLOGIC.JS            *
 *                                      EQUATION.JS               *
 ******************************************************************/
function getAnswer(){ // For numbers
	return colorCheck() && numberCheck();
}
function getAnswer2() { // For shapes
	return colorCheck();
}
function userAnswer(myAns){
	var questionAns;
	if (checkAnswer == 0) {
		questionAns = getAnswer();
	} else if (checkAnswer == 1) {
		questionAns = getAnswer2();
	}
	var message = document.getElementById('message');
	
	if(myAns == questionAns){
		//Score increment here
		correctAnswer();
		message.style.color = "#70C1B2";
		message.innerHTML = "<h4>Correct!</h4>";
	} else {
		minusLife();
		message.style.color = "#F25E5C";
		message.innerHTML = "<h4>Wrong!</h4>"
		//show hint if enabled
	}
	generateQuestion();
}