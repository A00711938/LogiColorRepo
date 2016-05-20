/*window.addEventListener("load", playerReady, false);
window.onload = function() {
	var setBtn = document.getElementById('setBtn');
	setBtn.addEventListener("onclick", gameSet, false);
}
*/

/******************************************************************
 *            THIS NEEDS THE FOLLOWING: COLORLOGIC.JS             *
 *                                      NUMBERLOGIC.JS            *
 *                                      EQUATION.JS               *
 ******************************************************************/
 
//This modal will show the "Are you ready" to the player.
//When pressed play, the game will initiate
//When pressed back, the game will return to main menu
function playerReady() {
	var modal = document.getElementById('ready');
	var body = document.getElementById('entire');
	var btn1 = document.getElementById('back');
	var btn2 = document.getElementById('play');
	
	modal.style.display = "block";
	//This disperse the modal and redirect the page to menu.
	btn1.onclick = function() {
		modal.style.display = "none";
		window.location.href = "welcomeScreenTakitoDesign.html";
	}
	//This disperse the modal and initiate the game.
	btn2.onclick = function() {
		modal.style.display = "none";
	}
}


/* In-Game Settings Modal*/
function gameSet() {
	var modal = document.getElementById('setGame');
	modal.style.display = "block";
	var returnBtn = document.getElementById('gameReturn');
	returnBtn.onclick = function() {
		modal.style.display = "none";
	}
}

// End - Level Modal Display
function levelEnd(score) {
	var modal = document.getElementById('gameOver');
	var body = document.getElementById('entire');
	var playAgain = document.getElementById('tryAgain');
	var nextLevel = document.getElementById('next');
	//I added a line to create an invisible input value that holds the score value. I will use
	//that input value so that I can transfer the score data in the database as needed. :)
	//Please do not remove that. PLEASE DO NOT REMOVE SCORED ADDITIONAL CODE!!!!!
	document.getElementById('scored').innerHTML = "<h3>You scored " + score + "</h3>" +
		"<input id=\"scoreinfo\" name=\"scoreValue\" value=" + score + " hidden=\"true\">";
    modal.style.display = "block";
	
	playAgain.onclick = function() {
		modal.style.display = "none";
		generateQuestion();
		document.getElementById('message').innerHTML = "";
		score = 0;
	}
}