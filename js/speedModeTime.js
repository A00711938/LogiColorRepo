//This variable determines the length of the TIME BAR in px unit.
var LENGTH = 1000;
//This variable determines the height of the TIME BAR in px unit.
var HEIGHT = 30;
//This is the max number of seconds before the speed mode ends.
var TIME = 5;
//This is the amount of seconds recovered upon answering the question correctly.
var RECOVERY = 3;
		
/*******************************************************************************
 *                        DO NOT CHANGE THE CODE BELOW                         *
 *******************************************************************************/
var timeleft = TIME * 100;
var unitBar = LENGTH / timeleft;
var color = 255;
var decriment = color / timeleft;

var timeBarStyle, timer;
//On window load, it will initialize variables and settings.
window.onload = function(){
	init();
}
//This function initialize the size of the TIME BAR.
//REQUIRED BLOCK FOR THIS FUNCTION, ID="timeBar"
function init(){
	timeBar = document.getElementById('timeBar');
	timeBar.style.width = LENGTH + "px";
	timeBar.style.height = HEIGHT + "px";
	timeBar.style.border = "1px solid black";
	timeBar.style.background = "#FFFF00";
	timer = null;
}
//This function starts the timer when the user click a "ready" button.
//REQUIRED BLOCK FOR THIS FUNCTION, none
//		Runs on onclick function.
function startTimer(){
	if(timer == null){
		document.getElementById('start').innerHTML = "Reset";
		timer = setInterval('run()', 10);	
	} else
		window.location.reload();
}
//This function runs the countdown of the timer in speed mode.
//It update the length of the TIME BAR and color value.
function run(){
	timeleft--;
	color -= decriment;
	updateTimeBar();

}
//This function updates the style of the time bar.
function updateTimeBar(){
	timeBar.style.width = (timeleft * unitBar) + "px";
	timeBar.style.background = "#FF" + Math.floor(color).toString(16) + "00";
}
//This function is called when someone correctly answer the question.
//It refills the time by RECOVERY amount of seconds to the max of TIME seconds.
function correct(){
	timeleft = Math.min(TIME * 100, timeleft + RECOVERY * 100);
	color = Math.min(255, decriment * RECOVERY * 100 + color);
	updateTimeBar();
}
//This function is called when someone wrongly answer the question.
//It puts the TIME BAR to empty and will load the game over screen.
function wrong(){
	timeleft = 0;
	color = 0;
	updateTimeBar();
	
	gameover();
}
//Placeholder to the game over screen.
function gameover(){
	/*
	PLACEHOLDER.
	INSERT GAME OVER MODAL IN THIS SECTION OF THE CODE
	*/
}