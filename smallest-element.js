function smallestElement(array) {

    // let small = 0;
    let small = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < small) {
            small = element;
        }

    }
    return small;

}

let example = [23, 44, 5, 67, 78, 34];
let smallNum = smallestElement(example);
console.log("Small number is: ", smallNum);
