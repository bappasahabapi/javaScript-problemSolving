// problem-1: seerToMon  start  
function seerToMon(seer) {

    let mon = seer / 40;
    return mon;
}

let myseers = 120;
let result = seerToMon(myseers)
console.log(result);

// problem-1: seerToMon  end  
//    ------------------- x --------------- 



// problem-2:  totalSales start 


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

// some possible  error case 
// const cost = totalSales(-2, 1, 1);

//    valid input 
const cost = totalSales(2, 1, 1);
console.log(cost);



// problem-2:  totalSales end 
//    ------------------- x --------------- 



// problem-3:  deliveryCost  start

function deliveryCost(shirts) {

    // delivery cost based on shirt numbers 

    const first100Shirts = 100;
    const second100Shirts = 80;
    const restNumberShirts = 50;

    // Calculation for first 0-100 shirts
    if (shirts <= 100) {
        const first100Cost = shirts * first100Shirts;
        return first100Cost;
    }

    // Calculation for first 0-100  and 100-200 shirts
    else if (shirts <= 200) {
        const first100Cost = 100 * first100Shirts;
        const restShirts = shirts - 100;
        const second100Cost = restShirts * second100Shirts;

        const totalShirtCost = first100Cost + second100Cost;
        return totalShirtCost;
    }
    // Calculation for 200+ shirts
    else {
        const first100Cost = 100 * first100Shirts;
        const second100Cost = 100 * second100Shirts;
        const restShirts = shirts - 200;
        const final200PlusShirts = restShirts * restNumberShirts;

        const totalShirtCost = first100Cost + second100Cost + final200PlusShirts;
        return totalShirtCost;
    }

}

// calling the function
const shirtNumbers = deliveryCost(201);
console.log(shirtNumbers);


// problem-3:  deliveryCost  end 
//    ------------------- x --------------- 




// problem-3:  perfectFriend  start


let names = ['tom', 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];
function perfectFriend() {
    let perfect = names[0].length;
    for (let i = 0; i < names.length; i++) {
        if (names[i].length == 5) {
            return names[i];
        }
    }
}

const friendName = perfectFriend(names);
console.log(friendName);

   // problem-3:   perfectFriend   end
   //    ------------------- x --------------- 
