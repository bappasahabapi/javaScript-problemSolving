/*
Wood for one chair = 3cft
Wood for one table = 10cft
Wood for one bed = 50cft
*/
// cost for 1 cft is 10tk

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

    // wood needed for per furniture

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // Wood Calculation
    const chiarWoodQunatity = chairQuantity * perChairWood;
    const tableWoodQunatity = tableQuantity * perTableWood;
    const bedWoodQunatity = bedQuantity * perBedWood;

    // adding all wood qunatity 
    const totalWood = chiarWoodQunatity + tableWoodQunatity + bedWoodQunatity;
    return totalWood;
}

const first = woodCalculator(1, 1, 1);
console.log(first);

