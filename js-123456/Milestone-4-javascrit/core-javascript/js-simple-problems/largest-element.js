function largestElement(numbers) {
    // var largest = 0;
    var largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i]
        // console.log(element);
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 34, 56, 6, 32];
const biggest = largestElement(ages);
const biggest1 = largestElement([-56, -4, -34, -2]);
// console.log("big number is: " + biggest);
console.log("big number is: " + biggest1);
