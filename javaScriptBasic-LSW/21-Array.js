//todo: 21-array

/* const cars = ["Saab", "Volvo", "BMW",67, {},null,undefined,'last-element-mango'];
console.log(typeof cars);
console.log(cars.length);
const lastElement =cars[cars.length-1];
console.log({lastElement});
console.table(cars.sort());
 */

/* 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const lastElement =fruits[fruits.length-1];


console.table(fruits);
console.log('Fruits length is:',fruits.length)

console.table(lastElement);

fruits.length=0;
console.log('Fruits length is:',fruits.length) */


// todo: looping array elements

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// // let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
// //   text =text+ "<li>" + fruits[i] + "</li>";
// console.log(i)
//     console.table(fruits[i]);
// }
// // text += "</ul>";
// console.log('finised');

// todo: using forEach insted of for loop

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

function myFunction(value){
    console.log(value);
}
fruits.forEach(myFunction); */


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// fruits.forEach((fruit)=>console.log(fruit));


// todo: How to check which one is array

/* const numbers =[1,2,3];
const person={name:'bappa',age:35};

console.log(typeof numbers, typeof person);
console.log(Array.isArray(numbers));
console.log(Array.isArray(person)); */


//todo: 22-convert arrary to string
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push('new');
// // document.getElementById("demo").innerHTML = fruits.toString();
// console.table(fruits);
// console.log(fruits.toString());

// fruits.pop('new');
// console.log(fruits.join(" "));

// fruits.shift("Banana");
// console.log(fruits.join(" "));

// todo: array splice method

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.table(fruits);

const fruits1=fruits.splice(2, 0, "Lemon", "Kiwi"); */


// todo:array slice()

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
// const citrus = fruits.slice(3);
console.table(citrus)

