const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'i-phone', price: 55000 }

]

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log("Total price is : ", totalPrice, "Tk.");

