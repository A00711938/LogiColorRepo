/******************************************************************
 *            THIS NEEDS THE FOLLOWING: COLORLOGIC.JS             *
 *                                      NUMBERLOGIC.JS            *
 *                                      EQUATION.JS               *
 ******************************************************************/
 
 //This function returns the equation's answer.
function getAnswer(){
	return colorCheck() && numberCheck();
}
//This function check if the user's answer is same as equation's answer.
//It then compute if its correct or wrong.
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