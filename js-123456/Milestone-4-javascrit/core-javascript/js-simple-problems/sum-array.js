// 2nd way using a function 

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {

        const element = numbers[i];
        sum = sum + element;
    }
    return sum;

}
const total = arrayTotal([23, 323, 55, 66, 78]);
console.log(total);







            // 1st way 

// const numbers = [44, 22, 55, 67, 23, 5, 78];
// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {

//     const element = numbers[i];
//     sum = sum + element;
// }
//     console.log(sum);