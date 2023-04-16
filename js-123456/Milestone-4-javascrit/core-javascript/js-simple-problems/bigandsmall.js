function largestElement(array) {
    let largeNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > largeNumber) {
            largeNumber = element;
        }
    }
    return largeNumber;
}
function smallestElement(array) {
    let smallNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < smallNumber) {
            smallNumber = element;
        }
    }
    return smallNumber;
}

let example = [23, 56, 77, 88, 45, 23, 16, 66];

let bigNumber = largestElement(example);
console.log("Big number is: " + bigNumber);

let smallNumber = smallestElement(example);
console.log("Small  number is: " + smallNumber);
