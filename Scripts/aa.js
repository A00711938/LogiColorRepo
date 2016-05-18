var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];
var questionColor = new Array(3);
var firstNumber, secondNumber;
var o, op;
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


function displayMessage() {
	switch (Math.floor(Math.random() * 33)) {
		case 0: //Green + Red = Black
			questionColor = [0, 1, 8], op = 0;
			break;
		case 1: //Red + Green = Black
			questionColor = [1, 0, 8], op = 0;
			break;
		case 2: //Red + Blue = Purple
			questionColor = [1, 3, 6], op = 0;
			break;
		case 3: //Blue + Red = Purple
			questionColor = [3, 1, 6], op = 0;
			break;
		case 4: //Red + Yellow = Orange
			questionColor = [1, 2, 7], op = 0;
			break;
		case 5: //Yellow + Red = Orange
			questionColor = [2, 1, 7], op = 0;
			break;
		case 6: //Yellow + Blue = Green
			questionColor = [2, 3, 0], op = 0;
			break;
		case 7: //Blue + Yellow = Green
			questionColor = [3, 2, 0], op = 0;
			break;
		case 8: //Black + White = Grey
			questionColor = [8, 4, 5], op = 0;
			break;
		case 9: //White + Black = Grey
			questionColor = [4, 8, 5], op = 0;
			break;
		case 10://Purple - Red = Blue
			questionColor = [6, 1, 3], op = 1;
			break;
		case 11://Purple - Blue = Red
			questionColor = [6, 3, 1], op = 1;
			break;
		case 12://Orange - Red = Yellow
			questionColor = [7, 1, 2], op = 1;
			break;
		case 13://Orange - Yellow = Red
			questionColor = [7, 2, 1], op = 1;
			break;
		case 14://Green - Yellow = Blue
			questionColor = [0, 2, 3], op = 1;
			break;
		case 15://Green - Blue = Yellow
			questionColor = [0, 3, 2], op = 1;
			break;
		case 16://Grey - Black = White
			questionColor = [5, 8, 4], op = 1;
			break;
		case 17://Grey - White = Black
			questionColor = [5, 4, 8], op = 1;
			break;
		case 18://Color - Color OR Color + Color
			var ran = Math.floor(Math.random() * 9);
			op = Math.floor(Math.random() * 2);
			if (op == 0)
				questionColor = [ran, ran, ran];
			else
				questionColor = [ran, ran, 8];	
			break;
		default: //Gives Random Color codes to all three param
			questionColor = [Math.floor(Math.random() * 9),
							 Math.floor(Math.random() * 9),
							 Math.floor(Math.random() * 9)];
			op = Math.floor(Math.random() * 2);
			break;
	}
	
	// Radomize numbers
	firstNumber = Math.floor(Math.random() * 10 + 1);
	secondNumber = Math.floor(Math.random() * 10 + 1);

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
