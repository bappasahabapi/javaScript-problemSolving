function animalCount(miles) {
    // const f10Cost = 10;
    // const s10Cost = 20;
    // const t10Cost = 50;
    // const f10Cost = 100;
    if (miles <= 10) {
        const first10Cost = miles * 10;
        return first10Cost;
    }
    else if (miles <= 20) {
        const first10 = 10 * 10;

        const restMiles = miles - 10;
        const second10 = restMiles * 20;

        const totalCosts = first10 + second10;
        return totalCosts;

    }
    else if (miles <= 30) {
        const first10 = 10 * 10;
        const second10 = 10 * 20;
        const restMiles = miles - 20;
        const third10 = restMiles * 50;
        const totalCosts = first10 + second10 + third10;
        return totalCosts;
    }
    else {
        const first10 = 10 * 10;
        const second10 = 10 * 20;
        const third10 = 10 * 50;
        const restMiles = miles - 30;
        const RestMilesAnimals = restMiles * 100;

        const totalAnimals = first10 + second10 + third10 + RestMilesAnimals;
        return totalAnimals;

    }
}



// calling the function
const observation = animalCount(31);
console.log("Total cost of money:" + observation);
