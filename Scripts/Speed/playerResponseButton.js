/******************************************************************
 *            THIS NEEDS THE FOLLOWING: COLORLOGIC.JS             *
 *                                      NUMBERLOGIC.JS            *
 *                                      EQUATION.JS               *
 ******************************************************************/
 
 //This function returns the equation's answer.
function getAnswer(){
	return colorCheck() && numberCheck(); // For numbers
}
function getAnswer2() { // For shapes
	return colorCheck();
}
//This function check if the user's answer is same as equation's answer.
//It then compute if its correct or wrong.
function userAnswer(myAns){
	var questionAns;
	if (checkAnswer == 0) {
		questionAns = getAnswer();
	} else if (checkAnswer == 1) {
		questionAns = getAnswer2();
	}
	var message = document.getElementById('message');
	
	if(myAns == questionAns){
		correct();
	} else {	
		wrong();
	}
	generateQuestion();
}