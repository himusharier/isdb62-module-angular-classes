const numbers = [-10, 20, -30, 40, -50];

// removing negatives:
const positives = numbers.filter(number => {
    return number > 0;
})
console.log(`positive numbers are: ${positives}`);

// double positives:
const doublePositives = positives.map(number => {
    return number * 2;
})
console.log(`doubling the positive numbers: ${doublePositives}`);

// sum of doubled positives:
const sumDoubled = doublePositives.reduce((sum, number) => {
    return sum + number;
}, 0)
console.log(`sum of dubled positive numbers: ${sumDoubled}`);
