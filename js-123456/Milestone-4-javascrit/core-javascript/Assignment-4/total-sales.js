
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {


    // error messege for negative input

    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {

        return "negative number is not accepted";
    }

    else {


        // cost  needed for single shirt,pant ,shoe

        const perShirtPrice = 100;
        const perPantPrice = 200;
        const perShoePrice = 500;

        // Cost  Calculation:
        const totalShirtCost = shirtQuantity * perShirtPrice;
        const totalPantCost = pantQuantity * perPantPrice;
        const totalShoeCost = shoeQuantity * perShoePrice;

        // adding all costs:
        const totalCost = totalShirtCost + totalPantCost + totalShoeCost;
        return totalCost;
    }


}

//   error case 
// const cost = totalSales(-2, 0, 0);
// const cost = totalSales(0, 0, -2);
// const cost = totalSales(0, -2, 0);

//    valid input 
const cost = totalSales(2, 1, 1);
console.log(cost);

