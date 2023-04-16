
function briingEgg(taka) {
    console.log("Money for egg", taka);
    var price = 10;
    var quantity = taka / price;
    return quantity;

}
var money = 240;
var money1 = [22, 33, 55, 66];
// briingEgg(taka);
// briingEgg(money);
// briingEgg(money1);
var eggQuantity = briingEgg(money);
console.log("Amount of egg= ", eggQuantity);
