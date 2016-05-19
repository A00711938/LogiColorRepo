//var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];
var color = [, "red", "blue", "purple", "yellow", "orange", "green", "black", "white",,,,,,,"gray"];
var c1;
var c2;
var c3;
var play;
var o, op;
var a, b;
var nb1;
var nb2;
var sum;	
var score = 0;
var play = Math.floor(Math.random() * 33);
var operation = ["+", "-"];
var lives = 3;
var level = 1;
var time = 0
var ms = 0;
var s = 0;
var timer = null;

function generateColor() {
	//Selecting the color generation by random.
	var choice = Math.floor(Math.random() * 2);
	//Selecting the operand by random.
	op = Math.floor(Math.random() * 2);
	
	if(!choice){
		//CORRECT COLOR (forcebly)
		if(!op){
			//ADDITION
			//Obtain the final color.
			var rand = Math.floor(Math.random() * 9);
			c3 = rand == 0 ? 15 : rand;
			//Keep rolling second color as long as it is bigger than the final.
			do{
				c2 = Math.floor(Math.random() * 9);
				c2 = c2 == 0 ? 15 : c2;
			} while (c2 > c3);
			//Determine the first dependent on the last two colors.
			c1 = c3 == c2 ? c2 : c3 - c2;
		} else {
			//SUBTRACTION
			//Obtain the first color
			var rand = Math.floor(Math.random() * 9);
			c1 = rand == 0 ? 15 : rand;
			//Keep rolling second color as long as it is bigger than the first.
			do{
				c2 = Math.floor(Math.random() * 9);
				c2 = c2 == 0 ? 15 : c2;
			} while (c2 > c1);
			//Determine the outcome depend on the first two color.
			c3 = c1 == c2 ? 8 : c1 - c2;
		}
	} else {
		//INCORRECT COLOR (mostly)
		//Generate all 3 color randomly.
		c1 = Math.floor(Math.random() * 9);
		c2 = Math.floor(Math.random() * 9);
		c3 = Math.floor(Math.random() * 9);
		c1 = c1 == 0 ? 15 : c1;
		c2 = c2 == 0 ? 15 : c2;
		c3 = c3 == 0 ? 15 : c3;
	}
	generateNumber();
	displayMessage();
}
function displayMessage(){
	
	// Apply chosen colors to corresponding element
	document.getElementById('num1').style.color = color[c1];
	document.getElementById('num2').style.color = color[c2];
	document.getElementById('sum').style.color = color[c3];
	
	// Display results
	document.getElementById('num1').innerHTML = nb1;
	document.getElementById('operation').innerHTML = operation[op];
	document.getElementById('num2').innerHTML = nb2;
	if (op == 0) {
		document.getElementById('sum').innerHTML = sum;
	} else {
		document.getElementById('sum').innerHTML = sum;

	}
} // end displayMessage
function generateNumber(){
	var choice = Math.floor(Math.random() * 2);
	var a,b;
	var firstNumber = Math.floor(Math.random() * 10 + 1);
	var secondNumber = Math.floor(Math.random() * 10 + 1);
	
	while(firstNumber < secondNumber){
		firstNumber = Math.floor(Math.random() * 10 + 1);
		secondNumber = Math.floor(Math.random() * 10 + 1);
	}
	a = firstNumber, b = secondNumber;
	
	
	sum = !choice ? (!op ? a + b : a - b) : (!op ? a + b + 1 : a + 1 - b);
	nb1 = firstNumber, nb2 = secondNumber;
}


function colorComb( op, x, y, z) {
	if (op == 0) { // Operation is Positive (+) 
		// var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];
		if ((x == y) && (y == z)) { // same colors (red + red = red)
			return true;
		} else if (x == 1 && y == 3 && z == 6) { // red + blue = purple
			return true;
		} else if (x == 3 && y == 1 && z == 6) { // blue + red = purple
			return true;
		} else if (x == 1 && y == 2 && z == 7) { // red + yellow = orange
			return true;
		} else if (x == 2 && y == 1 && z == 7) { // yellow + red = orange
			return true;
		} else if (x == 2 && y == 3 && z == 0) { // yellow + blue = green
			return true;
		} else if (x == 3 && y == 2 && z == 0) { // blue + yellow = green
			return true;
		} else if (x == 8 && y == 4 && z == 5) { // black8 + white4 = grey5
			return true;	
		} else if (x == 4 && y == 8 && z == 5) { // white + black = grey
			return true;
        } else if (x == 8 && y == 4 && z == 5) { // black + white = grey
			return true;
		} else if (x == 6 && y == 2 && z == 8) { // purple(r+b) + yellow = black
			return true;
		} else if (x == 2 && y == 6 && z == 8) { // yellow + purple = black
			return true;
		} else if (x == 0 && y == 1 && z == 8) { // green(b+y) + red = black
			return true;
		} else if (x == 1 && y == 0 && z == 8) { // red + green = black
			return true;
		} else{ // the rest color unions are considered as FALSE
			return false;
		}
	} else if (op == 1) { // Operation is Negative (-)
		if ((x == y) && (z == 8)) { // same colors (red - red = black)
			return true;
		} else if (x == 6 && y == 1 && z == 3) { // purple - red = blue
			return true;
		} else if (x == 6 && y == 3 && z == 1) { // purple - blue = red
			return true;
		} else if (x == 7 && y == 1 && z == 2) { // orange - red = yellow
			return true;
		} else if (x == 7 && y == 2 && z == 1) { // orange - yellow = red
			return true;
		} else if (x == 0 && y == 2 && z == 3) { // green - yellow = blue
			return true;
		} else if (x == 0 && y == 3 && z == 2) { // green - blue = yellow
			return true;
		} else if (x == 5 && y == 8 && z == 4) { // grey - black = white
			return true;
		} else if (x == 5 && y == 4 && z == 8) { // grey - white = black
			return true;
		} else{ // the rest color differences are considered as FALSE
			return false;
		}
	}
}

function numberComb(op, num1, num2, num3){
	return op ? num1 - num2 == num3 : num1 + num2 == num3;
}
function icolorComb(op, a){
	return op ? (a[0] == a[1] && a[2] == 7 || a[0] - a[1] == a[2]) :
				(a[0] == a[1] && a[1] == a[2] || a[0] + a[1] == a[2]);
}
function checkPlay(cPlay, op){
	if (op == 0) {
		if (cPlay >= 0){
			if (cPlay <= 9) {
				return true;
			} else{
				return false;
			}
		} else{
			return false;
		}
		return false;
	} else if (op == 1) {
		if (cPlay > 9) {
			if (cPlay <= 18) {
				return true;
			} else if (cPlay > 18){
				return colorComb(op, c1, c2, c3);
			} else{
				return false;
			}
		} else{
			return false;
		}
		return false;
	}
	return false;
}
function getAnswer(){
	//return colorComb(op, questionColor) && numberComb(op, firstNumber, secondNumber, sum);
	return (checkPlay(play, op)) && (numberComb(op, nb1, nb2, sum))
}
function userAnswer(myAns){
	var questionAns = getAnswer();
	var message = document.getElementById('message');
	
	if(myAns == questionAns){
		//Score increment here
		//I added score++ to allow me to visualize the score in the end game
		//modal. This may need to be modified to reflect a more accurate score.
		score++;
		message.style.color = "#70C1B2";
		message.innerHTML = "<h4>Correct!</h4>";
	} else {
		//decriment lives
		message.style.color = "#F25E5C";
		message.innerHTML = "<h4>Wrong!</h4>"
		//show hint if enabled
		
		if(lives == 3){
            document.getElementById('heart3').className = "glyphicon glyphicon-heart-empty";
            lives--;
        } else if(lives == 2){
            document.getElementById('heart2').className = "glyphicon glyphicon-heart-empty";
            lives--;
        } else if(lives == 1){
            document.getElementById('heart1').className = "glyphicon glyphicon-heart-empty";
            lives--;
            levelEnd(score);
        }
	}
	generateColor();
}

function newGame() {
    var modal = document.getElementById('gameOver');
	modal.style.display = "none";
    resetGame();
    generateColor();
}

function playSound(el,soundfile) {
    if (el.mp3) {
        el.mp3.pause();
        el.mp3.currentTime = 0;
        el.mp3.play();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }
}

function playMusic(el,soundfile) {
    el.mp3 = new Audio(soundfile);
    el.mp3.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    el.mp3.play();
}

function changeVolume(audio,percent) {
    audio.volume = percent/100;
}

function sliderChange(value){
	document.getElementById('sliderStatus').innerHTML = value;
}

function resetGame(){
    score = 0;
    lives = 3;
    level = 1;
    document.getElementById('message').innerHTML = "";
    document.getElementById('level').innerHTML = "Level: " + level;
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('heart1').className = "glyphicon glyphicon-heart text-danger";
    document.getElementById('heart2').className = "glyphicon glyphicon-heart text-danger";
    document.getElementById('heart3').className = "glyphicon glyphicon-heart text-danger";
}