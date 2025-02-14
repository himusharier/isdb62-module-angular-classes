function sumOfEvenNumbers(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number % 2 == 0) {
            sum += number;
        }
    }
    return sum;
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(numbers));
function discount(amount) {
    if (amount >= 100 && amount <= 300) {
        return amount * (10 / 100);
    }
    else if (amount > 300 && amount <= 700) {
        return amount * (15 / 100);
    }
    else if (amount > 700 && amount <= 1000) {
        return amount * (20 / 100);
    }
    else if (amount > 1000) {
        return amount * (25 / 100);
    }
    else {
        return 0;
    }
}
console.log(discount(150));
