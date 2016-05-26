//This is the amount of time before the heart cout decriment.
var timeLimit = 5;
//This is the amount of correct stages in order to gain addition heart.
var correctStage = 20;

/*******************************************************************************
 *                        DO NOT CHANGE THE CODE BELOW                         *
 *******************************************************************************/

var heart = new Array(life);
//This function initializes the time variables and the child objects.
//REDIRECT WHERE THE HEART IMAGE IS.
function liveInit(){
	for(var i = 0; i < life; i++){
		heart[i] = document.createElement('span');
		heart[i].className = "glyphicon glyphicon-heart text-danger";		
	}
	for(var i = 0; i < life; i++)
		document.getElementById('hearts').appendChild(heart[i]);		
}
//This function is to be called when a question is wrongly answered.
//This removes a heart child of the 'life' container.
//If there are no more life, it will move to the game over screen/modal.
//REQUIRED BLOCK FOR THIS FUNCTION, ID="HEARTS"
function minusLife(){
	if(life == 3){
		document.getElementById('heart3').className = "glyphicon glyphicon-heart-empty";
		life = 2;
	} else if(life == 2){
		document.getElementById('heart2').className = "glyphicon glyphicon-heart-empty";
		life = 1;
	} else{
		document.getElementById('heart1').className = "glyphicon glyphicon-heart-empty";
		life = 0;
	}
	//CALLS THE GAME OVER MODAL
	if(life == 0){
        playSound(this,'Sound/finish.mp3');
		levelEnd(score);
	}	
}