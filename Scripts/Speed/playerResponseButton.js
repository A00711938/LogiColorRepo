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
		correct();
	} else {	
		wrong();
	}
	generateQuestion();
}