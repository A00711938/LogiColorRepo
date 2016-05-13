var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];
var c1 = Math.floor(Math.random() * 9);
var c2 = Math.floor(Math.random() * 9);
var c3 = Math.floor(Math.random() * 9);

var oper = ["+", "-"];
var op = Math.floor(Math.random() * 2);


var score = 0;

var play = Math.floor(Math.random() * 10);

	

/**
	(1) red1 + blue3 = purple6
	(2) red1 + yellow2 = orange7
	(3) yellow2 + blue3 = green0
	(4) black8 + white4 = grey5
	
	(5) purple6 - red1 = blue3
	(6) purple6 - blue3 = red1
	(7) orange - red1 = yellow2
	(8) orange - yellow2 = red1
	(9) green - yellow2 = blue3
	(10) green - blue3 = yellow2
	(11) grey - black8 = white4
	(12) grey - white = black 8
	
	(13) purple6 + yellow2 = black8;
	(14) orange7 + blue3 = black8;
	(15) green0 + red1 = black8;
	

	same + same = same
		-> 8 times
	same - same = same
*/

function colorComb(x, y, z) {  

	if (x == color[1] && op == 0 && y == color[3]) { //red + blue = purple
		if (z == color[6])
			return true;
	}
	if (x == color[3] && op == 0 && y == color[1]) { //blue + red
		if (z == color[6])
			return true;
	}
	if (x == color[1] && op == 0 && y == color[2]) { //red + yellow = orange
		if (z == color[7])
			return true;
	}
	if (x == color[2] && op == 0 && y == color[1]) { //yellow + red
		if (z == color[7])
			return true;
	}
	
	
	if (x == color[2] && op == 0 && y == color[3]) { //yellow + blue = green
		if (z == color[0])
			return true;
	}
	if (x == color[3] && op == 0 && y == color[2]) { //blue + yellow
		if (z == color[0])
			return true;
	}
	if (x == color[8] && op == 0 && y == color[4]) { //black8 + white4 = grey5
		if (z == color[5])
			return true;
	}
	if (x == color[4] && op == 0 && y == color[8]) { //white + black
		if (z == color[5])
			return true;
	}
	
	if (x == color[6] && op == 1) { //purple -
		if (y == color[1] && z == color[3]) { // red = blue
			return true;
		}
		if (y == color[3] && z == color[1]) { //blue = red
			return true;
		}
	}
	if (x == color[7] && op == 1) { //orange -
		if (y == color[1] && z == color[2]) { // red = yellow
			return true;
		}
		if (y == color[2] && z == color[1]) { // yellow = red
			return true;
		}
	}
	if (x == color[0] && op == 1) { //green -
		if (y == color[2] && z == color[3]) { // yellow = blue
			return true;
		}
		if (y == color[3] && z == color[2]) { // blue = yellow
			return true;
		}
	}
	
	
	
	
	if (x == color[5] && op == 1) { //grey -
		if (y == color[8] && z == color[4]) { //black = white
			return true;
		}
		if (y == color[4] && z == color[8]) { // white = black
			return true;
		}
	}
	if (x == y && y == z) { // same colors (red + red = red)
		return true;
	}
	
	if(z == color[8]) { // = black
		if (x == color[6] && op == 0 && y == color[2]){ //purple(r+b) + yellow
			return true;
		}
		if (x == color[7] && op == 0 && y == color[3]){ //orange(r+y) + blue 
			return true;
		}
		if (x == color[0] && op == 0 && y == color[1]){ //green(b+y) + red
			return true;
		}
	}
	
	
	
}
    
window.addEventListener("load", displayMessage, false);
function displayMessage2() {
	play = Math.floor(Math.random() * 33);
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
			c1 = 7 , c2 = 3, c3 = 8, op = 0; //orange7 + blue3 = black8;
			break;
		case 15:
			ran = Math.floor(Math.random() * 9); //same color combination
			c1 = ran, c2 = ran, c3 = ran, op = 0;	//(eg) red + red = red
			break;
		default: 
			c1 = Math.floor(Math.random() * 9);
			c2 = Math.floor(Math.random() * 9);
			c3 = Math.floor(Math.random() * 9);
			op = Math.floor(Math.random() * 2);
	}

	

    var a = "A";
    var b = "B";
    
    document.getElementById('num1').style.color = color[c1];
    document.getElementById('num2').style.color = color[c2];
    document.getElementById('sum').style.color = color[c3];
    document.getElementById('num1').innerHTML = a;
    document.getElementById('num2').innerHTML = b;
	document.getElementById('eq').innerHTML = oper[op];
    document.getElementById('sum').innerHTML = "C";
    document.getElementById('score').innerHTML = "Score: " + score;
}
function displayMessage() {
    c1 = Math.floor(Math.random() * 9);
    c2 = Math.floor(Math.random() * 9);
    c3 = Math.floor(Math.random() * 9);
	op = Math.floor(Math.random() * 2);
    
    var a = "A";
    var b = "B";
    
    document.getElementById('num1').style.color = color[c1];
    document.getElementById('num2').style.color = color[c2];
    document.getElementById('sum').style.color = color[c3];
    document.getElementById('num1').innerHTML = a;
    document.getElementById('num2').innerHTML = b;
	document.getElementById('eq').innerHTML = oper[op];
    document.getElementById('sum').innerHTML = "C";
    document.getElementById('score').innerHTML = "Score: " + score;
}

document.getElementById('tr').addEventListener("click", trueFun);
document.getElementById('fal').addEventListener("click", falseFun);

function trueFun() {
    if (colorComb(color[c1], color[c2], color[c3])) {
        score++;
        document.getElementById('score').innerHTML = "Score" + score;
        document.getElementById('message').style.color = "green";
        document.getElementById('message').innerHTML = "Correct!";
        displayMessage2();
    } else {
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        displayMessage2();
    }
}

function falseFun() {
    if (!colorComb(color[c1], color[c2], color[c3])) {
        score++;
        document.getElementById('score').innerHTML = "Score: " + score;
        document.getElementById('message').style.color = "green";
        document.getElementById('message').innerHTML = "Correct!";
        displayMessage2();
    } else {
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        displayMessage2();
    }
}

