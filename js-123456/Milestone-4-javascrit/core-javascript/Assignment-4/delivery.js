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

// error case 
// let numbers = 201.1333;


// valid input 
let numbers = 201;
const shirtNumbers = deliveryCost(numbers);
console.log(shirtNumbers);
