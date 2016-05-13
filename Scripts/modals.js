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
		window.location.href = "index.html";
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
function levelEnd(score) {
	var modal = document.getElementById('myModal');
	var body = document.getElementById('entire');
	var playAgain = document.getElementById('tryAgain');
	var nextLevel = document.getElementById('next');
    modal.style.display = "block";
    body.style.opacity = 0.4;
	
	playAgain.onclick = function() {
		modal.style.display = "none";
		displayMessage();
		document.getElementById('message').innerHTML = "";
		score = 0;
	}
	nextLevel.onclick = function() {
		modal.style.display = "none";
		window.location.href = "difficulty.html";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}