const cart = [
    {name: 'Laptop', price: 123000, quantity: 1},
    {name: 'Smart Phone', price: 10000, quantity: 1},
    {name: 't-shirt', price: 250, quantity: 8},
    {name: 'pants', price: 200, quantity: 5},
    {name: 'watch', price: 60000, quantity: 1}
]

function totalCost(price){
    let total = 0;
    for(product of cart){
        const productPrice = product.price * product.quantity;
        total = total + productPrice;
    }
    return total;
}
console.log("Total cost of the cart is:", totalCost(cart));