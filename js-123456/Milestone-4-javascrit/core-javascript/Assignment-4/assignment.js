// problem-1: seerToMon  start  
function seerToMon(seer) {
    //  error case 

    if (seer < 0) {
        return 'please give positive  value greater than zero';
    }

    else {
        let mon = seer / 40;
        return mon;
    }

}
// error case 
// let myseers = -1;

// valid input 
let myseers = 120;
let result = seerToMon(myseers)
console.log(result);

// problem-1: seerToMon  end  
//    ------------------- x --------------- 



// problem-2:  totalSales start 

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {


    // error messege for negative quantity inputs

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


// problem-2:  totalSales end 
//    ------------------- x --------------- 



// problem-3:  deliveryCost  start

function deliveryCost(shirts) {

    //  error message 
    let y = parseInt(numbers);
    if (numbers - y != 0) {
        return 'shirt numbers can not be fraction.plase give integer number';
    }
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

// error case for fraction number of shirts
// let numbers = 201.1333;


// valid input 
let numbers = 201;
const shirtNumbers = deliveryCost(numbers);
console.log(shirtNumbers);



// problem-3:  deliveryCost  end 
//    ------------------- x --------------- 




// problem-4:  perfectFriend  start

function perfectFriend() {

    let perfect = names[0].length;
    for (let i = 0; i < names.length; i++) {
        if (names[i] === '' || names[i] == number) {
            return 'null or integer value is not accepted';
        }
        if (names[i].length == 5) {
            return names[i];
        }
    }
}

// error case-1:
// let names = ['', 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];

// error case-2:
let number = [23, 34];
// let names = [number, 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];

// valid input 
let names = ['tom', 'dom', 'bapi', 'bappa', 'dhiman', 'montey'];
const friendName = perfectFriend(names);
console.log(friendName);



   // problem-4:   perfectFriend   end
   //    ------------------- x --------------- 
