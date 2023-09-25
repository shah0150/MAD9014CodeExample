function number(num1,operand, num2){
    switch(operand){
        case '*':
            console.log(num1*num2);
            break;
        case '/':
            console.log(num1/num2);
            break;
        case '+':
            console.log(num1+num2);
            break;
        case '-':
            console.log(num1-num2);
            break;
        default:
            console.log("Give me a number");
            break;


    }
}

number(3, '+', 5);

