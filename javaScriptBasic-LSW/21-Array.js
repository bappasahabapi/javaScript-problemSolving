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

/* const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
// const citrus = fruits.slice(3);
console.table(citrus) */


// todo: array sorting()
/* 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
// console.log(fruits.sort());
console.log(fruits.reverse()); */

//todo: number sorting

/* const points = [40, 100, 1, 5,25, 1];
points.sort(function (a, b) {
    return a - b
}
);
console.log(points) */

/* console.log(Math.max(1,4,5));
console.log(Math.min(1,4,5));

const number =[1,3,,55,6,88];
console.log(Math.max.applly) */


// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// cars.sort(function (a, b) {
//     return a.year - b.year
// }
// );

// console.log(cars)


// todo:24-array Iterators:

const numbers =[45,4,9,16,25];

function myFunction(total,value,index,array){
    /* // console.log(index,":",value);
    console.log(index);
    console.log(value);
    console.log(array);
    console.log("----"); */

    // return value*2;

    // return value>10;

    // console.log(total);
    // console.log('--')
    // return total +value;


}

// numbers.forEach(myFunction);
/* const newArray=numbers.map(myFunction);
console.log(newArray) */

/* const newArray =numbers.filter(myFunction);
console.log({newArray}) */

/* const newArray =numbers.reduce(myFunction);
console.log({newArray}) */



//todo: making string to array

// console.log(Array.from("ABCDEF"));


//todo: spread(...)
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.table(year)