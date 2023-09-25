function evenSum(number) {
    var total = 0; 

    if (number % 2 == 0){
        total += number;
    }
    return total
}

console.log(evenSum(6));

// 6
// 2, 4, 6
// 12