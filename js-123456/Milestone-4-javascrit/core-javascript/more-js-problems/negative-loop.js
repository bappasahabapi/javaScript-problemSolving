const array = [23, 44, 55, 67, 77, 88, 66, 7, -4, 76, 89];



function positiveReturn() {
    let newArray = [];
    for (let element of array) {
        if (element > 0) {
            newArray.push(element);
        }
        else {
            break;
        }
    }
    return newArray;
}
const result = positiveReturn(array);
console.log(result);