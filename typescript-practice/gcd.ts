let num1: number = 56;
let num2: number = 98;

while (num2 !== 0) {
    let temp: number = num2;
    num2 = num1 % num2;
    num1 = temp;
}

console.log(num1); // Output: 14
