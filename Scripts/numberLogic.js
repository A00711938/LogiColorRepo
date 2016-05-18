function generateNumber(){
	document.getElementById('actionBox').innerHTML = "Number Generation Called";
	var a, b;
	var choice = Math.floor(Math.random() * 2);
	firstNumber = Math.floor(Math.random() * 10 + 1);
	secondNumber = Math.floor(Math.random() * 10 + 1);
	
	while(firstNumber < secondNumber){
		firstNumber = Math.floor(Math.random() * 10 + 1);
		secondNumber = Math.floor(Math.random() * 10 + 1);
	}	
	a = firstNumber, b = secondNumber;
	sum = !choice ? (!op ? a + b : a - b) : (!op ? a + b + 1 : a + 1 - b);
	
	document.getElementById('actionBox').innerHTML = "Number Generation Finished";
}

function numberCheck(){
	return op ? firstNumber - secondNumber == sum : firstNumber + secondNumber == sum;
}