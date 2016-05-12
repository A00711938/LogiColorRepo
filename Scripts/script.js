var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];
var c1;
var c2;
var c3;
var op;
var a, b;
var nb1;
var nb2;
var sum;	
var score = 0;
var play = Math.floor(Math.random() * 33);
var operation = ["+", "-"];
var lives = 3;
var level = 1;

function displayMessage() {
	var play = Math.floor(Math.random() * 33);
	switch (play) {
		case 0: 
			c1 = 1, c2 = 3, c3 = 6, op = 0; //red + blue = purple
			break;
		case 1:
			c1 = 1, c2 = 2, c3 = 7, op = 0; //red + yellow = orange
			break;
		case 2:
			c1 = 2, c2 = 3, c3 = 0, op = 0; //yellow + blue = green
			break;
		case 3:
			c1 = 8, c2 = 4, c3 = 5, op = 0; //black + white = grey
			break;
		case 4:
			c1 = 6, c2 = 1, c3 = 3, op = 1; //purple6 - red1 = blue3
			break;
		case 5:
			c1 = 6, c2 = 3, c3 = 1, op = 1; //purple6 - blue3 = red1
			break;
		case 6:
			c1 = 7, c2 = 1, c3 = 2, op = 1; //orange - red1 = yellow2
			break;
		case 7:
			c1 = 7, c2 = 2, c3 = 1, op = 1; //orange - yellow2 = red1
			break;
		case 8: 
			c1 = 0, c2 = 2, c3 = 3, op = 1; //green0 - yellow2 = blue3
			break;
		case 9:
			c1 = 0, c2 = 3, c3 = 2, op = 1; //green - blue3 = yellow2
			break;
		case 10:
			c1 = 5, c2 = 8, c3 = 4, op = 1; //grey5 - black8 = white4
			break;
		case 11:
			c1 = 5, c2 = 4, c3 = 8, op = 1; //grey - white = black8
			break;
		case 12:
			c1 = 6, c2 = 2, c3 = 8, op = 0; // purple6 + yellow2 = black8
			break;
		case 13:
			c1 = 0, c2 = 1, c3 = 8, op = 0; //green0 + red1 = black8
			break;
		case 14:
			c1 = 7, c2 = 3, c3 = 8, op = 0; //orange7 + blue3 = black8;
			break;
		case 15:
			var ran = Math.floor(Math.random() * 9);
			c1 = ran, c2 = ran, c3 = ran, op = Math.floor(Math.random() * 2);	
			break;
		default: 
			c1 = Math.floor(Math.random() * 9);
			c2 = Math.floor(Math.random() * 9);
			c3 = Math.floor(Math.random() * 9);
			op = Math.floor(Math.random() * 2);
	}
	
	// Radomize numbers
	a = Math.floor(Math.random() * 10 + 1);
	b = Math.floor(Math.random() * 10 + 1);

	if (a < b) {
		noFloating(a, b);
	} else if(a % b != 0) {
		noFloating(a, b);
	} else{
		nb1 = a;
		nb2 = b;
	}
	function noFloating(n1, n2) {
		n1 = Math.floor(Math.random() * 10 + 1);
		n2 = Math.floor(Math.random() * 10 + 1);
		checkFloating(n1,n2);
	}
	function checkFloating(n1, n2) {
		if (n1 < n2) {
			noFloating(n1, n2);
		} else if(n1 % n2 != 0) {
			noFloating(n1, n2);	
		} else{
			nb1 = n1;
			nb2 = n2;
		}
	}

	// Apply chosen colors to corresponding element
	document.getElementById('num1').style.color = color[c1];
	document.getElementById('num2').style.color = color[c2];
	document.getElementById('sum').style.color = color[c3];
	
	// Display results
	document.getElementById('num1').innerHTML = nb1;
	document.getElementById('operation').innerHTML = operation[op];
	document.getElementById('num2').innerHTML = nb2;
	if (op == 0) {
		document.getElementById('sum').innerHTML = nb1 + nb2;
		sum = nb1 + nb2;
	} else {
		document.getElementById('sum').innerHTML = nb1 - nb2;
		sum = nb1 - nb2;
	}
} // end displayMessage


function colorComb( op, x, y, z) {
	if (op == 0) {
		if ((x == y) && (y == z)) { // same colors (red + red = red)
			return true;
		} else if (x == 1 && y == 3) { //red + blue = purple
			if (z == 6) {
				return true;
			}
		} else if (x == 3 && y == 1) { //blue + red
			if (z == 6){
				return true;
			}
		} else if (x == 1 && y == 2) { //red + yellow = orange
			if (z == 7){
				return true;
			}
			return false;
		} else if (x == 2 && y == 1) { //yellow + red
			if (z == 7){
				return true;
			}
			return false;
		} else if (x == 2 && y == 3) { //yellow + blue = green
			if (z == 0) {
				return true;
			}
			return false;
		} else if (x == 3 && y == 2) { //blue + yellow
			if (z == 0) {
				return true;
			}
			return false;
		} else if (x == 8 && y == 4) { //black8 + white4 = grey5
			if (z == 5) {
				return true;
			}
			return false;
		} else if (x == 4 && y == 8) { //white + black
			if (z == 5){
				return true;
			}
			return false;
		}
		return false;
	}
	else if (op == 1) {
		if ((x == y) && (y == z)) { // same colors (red + red = red)
			return true;
		} else if (x == 6) { //purple -
			if (y == 1 && z == 3) { // red = blue
				return true;
			} else if (y == 3 && z == 1) { //blue = red
				return true;
			}
			return false;
		} else if (x == 7) { //orange -
			if (y == 1 && z == 2) { // red = yellow
				return true;
			} else if (y == 2 && z == 1) { // yellow = red
				return true;
			}
			return false;
		} else if (x == 0) { //green -
			if (y == 2 && z == 3) { // yellow = blue
				return true;
			} else if (y == 3 && z == 2) { // blue = yellow
				return true;
			}
			return false;
		} else if (x == 5) { //grey -
			if (y == 8 && z == 4) { //black = white
				return true;
			} else if (y == 4 && z == 8) { // white = black
				return true;
			}
			return false;
		} else if(z == 8) { // = black
			if (x == 6 && y == 2){ //purple(r+b) + yellow
				return true;
			} else if (x == 7 && y == 3){ //orange(r+y) + blue 
				return true;
			} else if (x == 0 && y == 1){ //green(b+y) + red
				return true;
			}
			return false;
		}
		return false;
	}
	return false;
}

function numberComb(op, nb1, nb2, sum) {
	if (op == 0) {
		if (sum == (nb1 + nb2)) {
			return true;
		}
		return false;
	} else if (op == 1) {
		if (sum == (nb1 - nb2)) {
			return true;
		} 
		return false;
	}
	return false;
}

//  True & False Buttons and Their Actions
window.onload = function() {
    var trueBtn = document.getElementById('tr');
    trueBtn.addEventListener("onclick", trueFun, false);
    var falseBtn = document.getElementById('fal');
    falseBtn.addEventListener("onclick", falseFun, false);
}

function trueFun() {
    if (colorComb(op, c1, c2, c3) && numberComb(op, nb1, nb2, sum)) {
        score++;
        document.getElementById('score').innerHTML = "Score" + score;
        document.getElementById('message').style.color = "green";
        document.getElementById('message').innerHTML = "Correct!";
        if(score % 5 == 0){
            level++;
            document.getElementById('level').innerHTML = "Level: " + level;
        }
        displayMessage();
    } else{
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        if(lives == 3){
            document.getElementById('heart3').className = "glyphicon glyphicon-heart-empty";
            lives = 2;
        } else if(lives == 2){
            document.getElementById('heart2').className = "glyphicon glyphicon-heart-empty";
            lives = 1;
        } else{
            document.getElementById('heart1').className = "glyphicon glyphicon-heart-empty";
            lives = 0;
        }
        if(lives == 0){
            levelEnd(score);
        }
        displayMessage();
    }
}

function falseFun() {
    if (!colorComb(op, c1, c2, c3) && numberComb(op, nb1, nb2, sum)) {
        score++;
        document.getElementById('score').innerHTML = "Score: " + score;
        document.getElementById('message').style.color = "green";
        document.getElementById('message').innerHTML = "Correct!";
        if(score % 5 == 0){
            level++;
            document.getElementById('level').innerHTML = "Level: " + level;
        }
        displayMessage();
    } else{
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        if(lives == 3){
            document.getElementById('heart3').className = "glyphicon glyphicon-heart-empty";
            lives = 2;
        } else if(lives == 2){
            document.getElementById('heart2').className = "glyphicon glyphicon-heart-empty";
            lives = 1;
        } else{
            document.getElementById('heart1').className = "glyphicon glyphicon-heart-empty";
            lives = 0;
        }
        if(lives == 0){
            levelEnd(score);
        }
        displayMessage();
    }
}

function playSound(el,soundfile) {
    if (el.mp3) {
        el.mp3.play();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }
}