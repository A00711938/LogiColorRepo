/* Javascript Doc*/
	
var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];

/* Randomize colors*/
var c1;
var c2;
var c3;
var play;
var o, op;
var score = 0;
var play = Math.floor(Math.random() * 33);
var operation = ["+", "-"];

window.addEventListener("onload", displayMessage, false);


	play = Math.floor(Math.random() * 33);
	switch (play) {
		case 0:
			c1 = 0, c2 = 1, c3 = 2, op = 0; // green0 + red1 = yellow (not black)
			break;
		case 1:
			c1 = 1, c2 = 0, c3 = 2, op = 0; // red + green = yellow
			break;
		case 2: 
			c1 = 1, c2 = 3, c3 = 6, op = 0; // red + blue = purple
			break;
		case 3: 
			c1 = 3, c2 = 1, c3 = 6, op = 0; // blue + red = purple
			break;
		case 4:
			c1 = 1, c2 = 2, c3 = 7, op = 0; // red + yellow = orange
			break;
		case 5:
			c1 = 2, c2 = 3, c3 = 0, op = 0; // yellow + blue = green
			break;
		case 6:
			c1 = 8, c2 = 4, c3 = 5, op = 0; // black + white = grey
			break;
		case 7:
			c1 = 4, c2 = 8, c3 = 5, op = 0; // white + black = grey
			break;
		case 8:
			c1 = 6, c2 = 1, c3 = 3, op = 1; // purple6 - red1 = blue3
			break;
		case 9:
			c1 = 6, c2 = 3, c3 = 1, op = 1; // purple6 - blue3 = red1
			break;
		case 10:
			c1 = 7, c2 = 1, c3 = 2, op = 1; // orange - red1 = yellow2
			break;
		case 11:
			c1 = 7, c2 = 2, c3 = 1, op = 1; // orange - yellow2 = red1
			break;
		case 12: 
			c1 = 0, c2 = 2, c3 = 3, op = 1; // green0 - yellow2 = blue3
			break;
		case 13:
			c1 = 0, c2 = 3, c3 = 2, op = 1; // green - blue3 = yellow2
			break;
		case 14:
			c1 = 5, c2 = 8, c3 = 4, op = 1; // grey5 - black8 = white4
			break;
		case 15:
			c1 = 5, c2 = 4, c3 = 8, op = 1; // grey - white = black8
			break;
		case 16:
			var ran = Math.floor(Math.random() * 9);
			op = Math.floor(Math.random() * 2);
			if (op == 0) {
				c1 = ran, c2 = ran, c3 = ran;	
				break;
			} else{
				c1 = ran, c2 = ran, c3 = 8;	
				break;
			}
		default: 
			c1 = Math.floor(Math.random() * 9);
			c2 = Math.floor(Math.random() * 9);
			c3 = Math.floor(Math.random() * 9);
			op = Math.floor(Math.random() * 2);
			break;
	}
function displayMessage() {	
	
}	
	/* Apply chosen colors to corresponding element
	document.getElementById('num1').style.color = color[c1];
	document.getElementById('num2').style.color = color[c2];
	document.getElementById('sum').style.color = color[c3];
	*/
	
	// Display results
	/*document.getElementById('num1').innerHTML = ;
	
	document.getElementById('num2').innerHTML = ;
	
	document.getElementById('operation').innerHTML = operation[op];
	if (op == 0) {
		document.getElementById('sum').innerHTML = ;
	} else {
		document.getElementById('sum').innerHTML = ;
	}*/
 // end displayMessage


function colorComb( op, x, y, z) {
	if (op == 0) { // Operation is Positive (+)
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
		} else if (x == 6 && y == 2 && z == 8) { // purple(r+b) + yellow = black
			return true;
		} else if (x == 0 && y == 1 && z == 2) { // green(b+y) + red = yellow
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


window.onload = function() { // (True & False)Btns implemented
    var trueBtn = document.getElementById("tr");
	trueBtn.addEventListener("onclick", trueFun, false);
	var falseBtn = document.getElementById("fal");
	falseBtn.addEventListener("onclick", falseFun, true);
}

function trueFun() {
	if ((checkPlay(play, op)) && (numberComb(op, nb1, nb2, sum))) {
	//if ((colorComb(op, c1, c2, c3)) && (numberComb(op, nb1, nb2, sum))) {
		score++;
		document.getElementById('score').innerHTML = "Score" + score;
		document.getElementById('message').style.color = "green";
		document.getElementById('message').innerHTML = "Correct!";
		//levelEnd(score);
		displayMessage();
	} else{
		document.getElementById('message').style.color = "red";
		document.getElementById('message').innerHTML = "Wrong!";
		displayMessage();
	}
}// end trueFun

function falseFun() {
    if (!(checkPlay(play, op) && numberComb(op, nb1, nb2, sum))) {
		score++;
		document.getElementById('score').innerHTML = "Score: " + score;
		document.getElementById('message').style.color = "green";
		document.getElementById('message').innerHTML = "Correct!";
		//levelEnd(score);
		displayMessage();
    } else{
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        displayMessage();
    }
}// end falseFun
