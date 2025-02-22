const sales = [
    {id: 1, product: "laptop", amount: 1500, category: "electronics"},
    {id: 2, product: "phone", amount: 800, category: "electronics"},
    {id: 3, product: "mouse", amount: 50, category: "accessories"},
    {id: 4, product: "monitor", amount: 300, category: "electronics"},
    {id: 5, product: "keyboard", amount: 100, category: "accessories"},
    {id: 6, product: "usb cable", amount: 20, category: "accessories"}
]

// transaction less than 100 filter out:
const tnxGreaterHundred = sales.filter(sale => {
    if(sale.amount >= 100) {
        return sale;
    }
})
console.log("sales with greater amount (greater than 100):")
console.log(tnxGreaterHundred);

// extract only product name and amount:
const productNameAmount = sales.map(sale => {
    return {product: sale.product, amount: sale.amount};
})
console.log("products with 'product name' and 'amount' only:")
console.log(productNameAmount);

// calculating the remaining transaction total:
const remainingTotals = tnxGreaterHundred.reduce((total, sale) => {
    return total + sale.amount;
}, 0)
console.log(`total of remaining sales amount: ${remainingTotals}`);