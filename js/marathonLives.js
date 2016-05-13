//This is the amount of time before the heart cout decriment.
var timeLimit = 5;
//This is the amount of correct stages in order to gain addition heart.
var correctStage = 20;

/*******************************************************************************
 *                        DO NOT CHANGE THE CODE BELOW                         *
 *******************************************************************************/
 
var timer=null;
var time, ms, s, correct;
var life = 3;
var heart = new Array(life);
//This functions prepares the lives container by adding heart child to the 'life' div tag
//REQUIRED BLOCK FOR THIS FUNCTION, ID="LIFE"
window.onload=function(){
	init();
	for(var i = 0; i < 3; i++)
		document.getElementById('life').appendChild(heart[i]);			
}
//This function initializes the time variables and the child objects.
//REDIRECT WHERE THE HEART IMAGE IS.
function init(){
	time = ms = s = correct = 0;
	for(var i = 0; i < 3; i++){
		heart[i] = document.createElement('img');
		heart[i].src="heart.png";				
	}
}
//This function is to be called when a question is wrongly answered.
//This removes a heart child of the 'life' container.
//If there are no more life, it will move to the game over screen/modal.
//REQUIRED BLOCK FOR THIS FUNCTION, ID="LIFE"
function minusLife(){
	document.getElementById('life').removeChild(heart[--life]);	
	if(life==0)
		gameover();
}
//This function is called everytime when the user answers correctly.
//Every correctStage amount of correct answers will increment the heart count by 1 (max of 3)
//REQUIRED BLOCK FOR THIS FUNCTION, ID="LIFE"
function correctAnswer(){
	if(++correct == correctStage){
		if(life != 3)
			document.getElementById('life').appendChild(heart[life++]);
		correct = 0;
	}
}
//This function starts the timer of the marathon mode.
//The player have atmost timeLimit seconds.
//THIS IS A PLACEHOLDER FOR THE READY BUTTON.
function start(){
	if(timer==null){
		document.getElementById('start').innerHTML="Restart";
		timer=setInterval('run()', 100);
	} else 
		reset();
}
//This function refreshes the page.
function reset(){
	window.location.reload();
}
//This function calculate the amount of time has passed.
//If the time has reached timeLimit, it will move to the game over screen/modal.
//REQUIRED BLOCK FOR THIS FUNCTION, ID="TIME"
function run(){
	time++;
	ms = Math.floor(time%10);
	s=Math.floor(time/10);
	document.getElementById('time').innerHTML="Time: " + s + "." + ms;
	
	if(s == timeLimit){
		minusLife();
		time = 0;
	}
}
//This function calls the game over screen/modal.
//REDIRECT THE PAGE TO THE GAME OVER SCREEN. REPLACE WITH MODAL IF NEEDED.
function gameover(){
	window.location="gameover.html";
}