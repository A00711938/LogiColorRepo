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
	
	var span = document.getElementsById('tryAgain')[0];
	
	if (score == 5) {
		modal.style.display = "block";
		body.style.opacity = 0.4;
	}
	
	span.onclick = function() {
		modal.style.display = "none";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}