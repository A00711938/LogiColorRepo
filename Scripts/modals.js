window.addEventListener("load", playerReady, false);
window.onload = function() {
	var setBtn = document.getElementById('setBtn');
	setBtn.addEventListener("onclick", gameSet, false);
}

// Modal 'Are You Ready'
function playerReady() {
	var modal = document.getElementById('ready');
	var body = document.getElementById('entire');
	var btn1 = document.getElementById('back');
	var btn2 = document.getElementById('play');
	
	modal.style.display = "block";
	
	btn1.onclick = function() {
		modal.style.display = "none";
		window.location.href = "index.html";
	}
	
	btn2.onclick = function() {
		modal.style.display = "none";
        playSound(this,'Sound/marathonmusic.mp3');
        start();
		displayMessage();
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "block";
		}
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
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "block";
		}
	}
}

// End - Level Modal Display
function levelEnd(score) {
	var modal = document.getElementById('gameOver');
	var body = document.getElementById('entire');
	var playAgain = document.getElementById('tryAgain');
	var nextLevel = document.getElementById('next');
	document.getElementById('scored').innerHTML = "<h3>You scored " + score + "</h3>";
    modal.style.display = "block";
    body.style.opacity = 0.4;
	
	playAgain.onclick = function() {
		modal.style.display = "none";
		displayMessage();
		document.getElementById('message').innerHTML = "";
		score = 0;
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}