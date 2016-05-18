function generateColor() {
	document.getElementById('actionBox').innerHTML = "Color Generation Called";
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
			} while (c2 > c1 && (c1 == 15 && (c2 != 7 || c2 != 8)));
			//Determine the outcome depend on the first two color.
			c3 = c1 == c2 ? 8 : c1 - c2;
		}
	} else {
		//INCORRECT COLOR (mostly)
		//Generate all 3 color randomly.
		//Looping the algorithm again when the random generated a correct statement.
		do{
			c1 = Math.floor(Math.random() * 9);
			c2 = Math.floor(Math.random() * 9);
			c3 = Math.floor(Math.random() * 9);
			c1 = c1 == 0 ? 15 : c1;
			c2 = c2 == 0 ? 15 : c2;
			c3 = c3 == 0 ? 15 : c3;
		} while(colorCheck(op, c1, c2, c3));
	}
	document.getElementById('actionBox').innerHTML = "Color Generation Finished";
}

function colorCheck(){
	return op ? (c1 == c2 && c3 == 7 || c1 - c2 == c3) :
				(c1 == c2 && c2 == c3 || c1 + c2 == c3);
}