function sumOfEvenNumbers(numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        if (num % 2 == 0) {
            sum += num;
        }
    }
    return sum;
}

let numbers: number[] = [1,2,3,4,5,6];
console.log(sumOfEvenNumbers(numbers));


function discount(amount: number): number {
    if (amount >= 100 && amount <= 300) {
        return amount*(10/100);
    } else if (amount > 300 && amount <= 700) {
        return amount*(15/100);
    } else if (amount > 700 && amount <= 1000) {
        return amount*(20/100);
    } else if (amount > 1000) {
        return amount*(25/100);
    } else {
        return 0;
    }
}
console.log(discount(150));