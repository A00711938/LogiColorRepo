/***************************************************************************
 *         REQUIRED JAVASCRIPT FILES                 GLOBAL.JS             *
 ***************************************************************************/

//This function will generate the number part of the equation.
//Currently it will generate at 71% correctly.
function generateNumber(){
	var a, b;
	var choice = Math.floor(Math.random() * 100);
	//Randomly generates the two numbers.
	//It will repeat generation until the two numbers won't generate a negative value through minus.
	do{
		firstNumber = Math.floor(Math.random() * 10 + 1);
		secondNumber = Math.floor(Math.random() * 10 + 1);
	} while(op && firstNumber < secondNumber);
	
	a = firstNumber, b = secondNumber;
	sum = choice < 71 ? (!op ? a + b : a - b) : (!op ? a + b + 1 : a + 1 - b);
}
//This function checks if the number equation is correct or not.
function numberCheck(){
	return op ? firstNumber - secondNumber == sum : firstNumber + secondNumber == sum;
}