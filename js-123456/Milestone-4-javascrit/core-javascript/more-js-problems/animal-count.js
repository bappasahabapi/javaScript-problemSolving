function animalCount(miles) {
    const f10AnimalDens = 10;
    const s10AnimalDens = 50;
    const thirdAnimalDens = 100;
    if (miles <= 10) {
        const first10 = miles * f10AnimalDens;
        return first10;
    }
    else if (miles <= 20) {
        const first10 = 10 * f10AnimalDens;

        const restMiles = miles - 10;
        const second10 = restMiles * s10AnimalDens;

        const totalAnimals = first10 + second10;
        return totalAnimals;

    }
    else {
        const first10 = 10 * f10AnimalDens;
        const second10 = 10 * s10AnimalDens;
        const restMiles = miles - 20;
        const RestMilesAnimals = restMiles * thirdAnimalDens;

        const totalAnimals = first10 + second10 + RestMilesAnimals;
        return totalAnimals;






    }
}



// calling the function
const observation = animalCount(21);
console.log(observation);
