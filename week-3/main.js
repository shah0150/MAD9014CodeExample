// Let's write a switch case for calculator
var prompt = require('prompt-sync')();

function calculator(){
    let operation = prompt("Enter your operation: (+, -, /, *)");
    let number1 = parseFloat(prompt("Enter your number 1: "));
    let number2 = parseFloat(prompt("Enter your number 2: "));

    let result;

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            if(number2 == 0){
                result = "Cannot divide by zero"
            } else{
                result = number1 / number2;
            }
            break;
        case '*':
            result = number1 * number2;
            break;
        default:
            break;
    }
    console.log("Result: ", result);
}

let shouldRunCal = true;

if (shouldRunCal == true) {
    calculator();
} else { 
    console.log("Sorry, I can't run the calculator function");
}







