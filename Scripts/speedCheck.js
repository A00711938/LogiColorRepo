var readyTimer = null;
var readySecond = 3;

function startCheck(){
	readyTimer = setInterval('readying()', 750);
}

function readying(){
	var textbox = document.getElementById('racetext');
	textbox.style.color = "white";
	textbox.innerHTML = readySecond;
	
	if(!readySecond){
		clearInterval(readyTimer);
		readyTimer = null;
		textbox.innerHTML = "";
		generateQuestion();
		startTimer();
	}
	readySecond--;
}