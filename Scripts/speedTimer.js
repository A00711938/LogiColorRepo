
/*******************************************************************************
 *                        DO NOT CHANGE THE CODE BELOW                         *
 *            THIS NEEDS THE FOLLOWING:         MODALS.JS                      *
 *******************************************************************************/
 
//This function initialize the size of the TIME BAR.
//REQUIRED BLOCK FOR THIS FUNCTION, ID="timebar"
function speedBarInit(){
	timeBar = document.getElementById('timebar');
	
	speedBarLength = Math.min(timeBar.offsetWidth, window.innerWidth);
	speedBarHeight = timeBar.offsetHeight;
	speedBarTimeLimit = 5;
	speedBarRecovery = 3;
	
	speedBarTimeLeft = speedBarTimeLimit * 100;
	speedBarLengthUnit = speedBarLength / speedBarTimeLeft;
	speedBarColor = 255;
	speedBarColorUnit = speedBarColor / speedBarTimeLeft;
	
	speedTimer = null;
	score = 0;
}
//This function starts the timer when the user click a "ready" button.
//REQUIRED BLOCK FOR THIS FUNCTION, none
//		Runs on onclick function.
function startTimer(){
	speedTimer = setInterval('run()', 10);
}
//This function runs the countdown of the timer in speed mode.
//It update the length of the TIME BAR and color value.
function run(){
	speedBarTimeLeft--;
	speedBarColor -= speedBarColorUnit;
	updateTimeBar();
	
	if(speedBarTimeLeft <= 0)
		wrong();
}
//This function updates the style of the time bar.
function updateTimeBar(){
	timeBar.style.width = Math.floor(speedBarTimeLeft * speedBarLengthUnit)+ "px";
	timeBar.style.background = "#FF" + Math.floor(speedBarColor).toString(16) + "00";
}
//This function is called when someone correctly answer the question.
//It refills the time by RECOVERY amount of seconds to the max of TIME seconds.
function correct(){
	document.getElementById('score').innerHTML = "Stages Completed: " + (++score);
	speedBarTimeLeft = Math.min(speedBarTimeLimit * 100, speedBarTimeLeft + speedBarRecovery * 100);
	speedBarColor = Math.min(255, speedBarColorUnit * speedBarRecovery * 100 + speedBarColor);
	updateTimeBar();
}
//This function is called when someone wrongly answer the question.
//It puts the TIME BAR to empty and will load the game over screen.
function wrong(){
	speedBarTimeLeft = speedBarColor = 0;
	updateTimeBar();
	
	clearInterval(speedTimer);
	speedTimer = null;
		
	levelEnd(score);
}
