/******************************************************************
 *            THIS NEEDS THE FOLLOWING: COLORLOGIC.JS             *
 *                                      NUMBERLOGIC.JS            *
 *                                      EQUATION.JS               *
 ******************************************************************/
function getAnswer(){
	return colorCheck() && numberCheck();
}
function userAnswer(myAns){
	var questionAns = getAnswer();
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