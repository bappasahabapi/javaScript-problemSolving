/* Basic :
first define the function 
 then call the function

 */

// -->  1. wite a function having no parametaer.

function turnOn(params) {
    console.log("Turn on the switch of the fan 👍");

}
turnOn();
console.log('code executation ');
turnOn()

// -->

//  2. A function havig input parameters.
function bringPotato(taka) {
    console.log("given money is:", taka, "Tk.");
    console.log("paid by ", taka);


}
bringPotato(250);
bringPotato(350);
bringPotato('raju');
//........................ -->

//  2. A function havig two input  parameters.

function book(money, name) {
    console.log("Paid " + money + "Tk. by " + name);
    console.log("Amout ", money, "is received by", name);


}
book(250, 'Raju')
// -->

// 3. A fucntion havng a return value

function pen(money) {
    console.log("given money", money);
    var penPrice = 10;
    var quantity = money / penPrice;
    // console.log("total pen quantity: ", quantity);
    return quantity;
}

var taka = 100;
var gettingPen = pen(taka);
console.log("Number of pen is:", gettingPen);


// pen(100)
// pen(200)

//............................. -->