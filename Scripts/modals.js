window.addEventListener("load", playerReady, false);

// Modal 'Are You Ready'
function playerReady() {
	var modal = document.getElementById('ready');
	var body = document.getElementById('entire');
	var btn1 = document.getElementById('back');
	var btn2 = document.getElementById('play');
	
	modal.style.display = "block";
	
	btn1.onclick = function() {
		modal.style.display = "none";
<<<<<<< HEAD
		window.location.href = "difficulty.html";
=======
		window.location.href = "index.html";
>>>>>>> master
	}
	
	btn2.onclick = function() {
		modal.style.display = "none";
		displayMessage();
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "block";
		}
	}
}



// End - Level Modal Display
<<<<<<< HEAD
function levelEnd(score, lives) {
	var modal = document.getElementById('gameOver');
	var body = document.getElementById('entire');
	
	var playAgain = document.getElementById('playAgain');
	var nextLevel = document.getElementById('next');
	if (score == 10 || lives == 0) {
		document.getElementById('scored').innerHTML = "<h3>You scored " + score + "</h3>";
		modal.style.display = "block";
		body.style.opacity = 0.4;
		
	}
	
	playAgain.onclick = function() {
		modal.style.display = "none";
		newGame();
=======
function levelEnd(score) {
	var modal = document.getElementById('myModal');
	var body = document.getElementById('entire');
	
	var span = document.getElementsById('tryAgain')[0];
	
	if (score == 5) {
		modal.style.display = "block";
		body.style.opacity = 0.4;
	}
	
	span.onclick = function() {
		modal.style.display = "none";
>>>>>>> master
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
<<<<<<< HEAD
}

function playSound(el,soundfile) {
    if (el.mp3) {
        el.mp3.play();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }
=======
>>>>>>> master
}