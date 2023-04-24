//todo:
// let x=7;
// let y=17;
// if (true) {
//     let x =6;
//     console.log({x});
// };
// console.table({x,y})



//todo:
// 1st : var carName; 
// then carName =undinied set kore
// 2nd : carName = Saab;
// 3rdd : console.table({carName}); exectue hoi.


/*
 carName = "Saab";
var carName ;
console.table({carName});

*/

/*  carName = "Saab";
let carName ;
console.table({carName}); */

//todo: string join

/* let text1 ='bappa';
let text2 ='saha';

let stringConcat =text1+ " "+ text2;
// console.log({ans})
console.table({stringConcat}) */

// todo: add string and nuber 
/* 
let a ='5';
let b =6;

let addStringAndNumber = (a+b);
// let addStringAndNumber = parseInt(a+b);

console.table({addStringAndNumber}); */

// todo: data types

/* const a =1000_00;
const b =123e5;
console.table({a,b}); */

// const cars = ["Saab", "Volvo", "BMW"];
// console.table({cars});


// ┌─────────┬────────┬─────────┬───────┐
// │ (index) │   0    │    1    │   2   │
// ├─────────┼────────┼─────────┼───────┤
// │  cars   │ 'Saab' │ 'Volvo' │ 'BMW' │
// └─────────┴────────┴─────────┴───────┘
/* 
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.table({person});
console.table(person);
console.table(typeof person); */


//todo: function

/* function sleep() {
    console.log("Bappa is sleeping-1");
}
console.log('sleeping-2');
console.log(typeof sleep)
sleep(); */

/* function sleeping(name){
    // console.log(name+" "+"is sleeping");
    console.log(name," ","is sleeping");
};

sleeping('karim');
sleeping('bappa');
sleeping('saha'); */


/* let x = myFunction(4, 3);   

function myFunction(a, b) {
  return a * b;  
} */

// console.table({x});

//todo: 13-object

/* const car ={
    name:'Toyata',
    model:500,
    weight:"850kg",
    color:'white',
    start:function(){
        this.drive();
        this.model;
        console.log('car started from the function');
    },
    drive:function(){
        console.log('car runnng');
    },
    
};
console.table(car);
console.table(car.name);
console.table(car.start);
console.log(car['color'])
car.start(); */

/* const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  person.fullName(); */


//todo: 15-string
/* let text = "ABCDEFGHIJKL \"data\" MNOPQRSTUVWXYZ";
console.log({text})
let length = text.length;
console.table(length); */

/* 
let a = "John";
let y = new String("John"); */

/* 
console.table(typeof a);
console.table(typeof y);
console.table(a==y);
console.table(a===y); */


//todo: slice(start, end)

/* let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); */
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// let part1=text.slice(7)

// console.table(part);
// console.table(part1);

// todo: string substring

// todo: split()--> convert sting to array

// let strr ="This is hellow word";
// console.table(strr.split(""));
// console.table(strr.split(" "));


// todo: split()--> convert sting to array


// todo: string search method

// let search = "Please locate where 'locate' occurs!";
// console.table( search.indexOf("locate"));
// let search1 = "Please locate where 'locate' occurs!";
// console.table( search1.search("locate"));

/* xt = "The rain in SPAIN stays mainly in the plain";
let store =text.match(/ain/g); */
// console.log(store)

/* let a = "I love cats. Cats are very easy to love. Cats are very popular."
const ans = a.matchAll("Cats");
console.log(ans) */
/* let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")) */



//todo: 18-Templete literals

/* let c = `threre is a 'deamy' boy named "BAPPA"`;
let country ="Bangladesh";
console.log({c});
console.log(`I love my ${country}`) */


//TODO: 19- Js Numbers

/* let a= "10";
let b = 10;
console.log(b)

console.log(isNaN(a))
console.log(isNaN(b)) */

// let x =0xFF;
// console.log(x);

/* let myNumber = 32;
let ans=myNumber.toString(32);
console.table(ans); */


//Todo: 20- js Number methods

/* let x = 123;
let numAsString =x.toString();
console.table({x,numAsString});
console.log(typeof numAsString);
let g =(100 + 23).toString();
console.log([g]) */


/* let x = 9.656776;
let ans=x.toFixed(4);
console.log(ans) */


/* let n1 =123;
let n2 = new Number(123);

console.log(typeof n1, typeof n2 )
console.log(n1==n2);
console.log(n1===n2);

console.log(Number(true))
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
console.table(Number("10,33"));
Number("10 33");
console.log(Number("John")) */


//todo: 21,22,23,24-array

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

// const numbers = [45, 4, 9, 16, 25];

function myFunction(total, value, index, array) {
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
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.table(year)


// todo: 26-dates

/* const d= new Date();
console.log(d);
console.log(d.toUTCString())
console.log(d.toDateString()); */

//TODO: 30-Math()

/* console.log(Math.PI);
console.log(Math.round(4.6))
console.log(Math.ceil(4.1))
console.log(Math.ceil(4.0))
console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200)) */

//todo: 31- Math.random()

// Returns a random integer from 0 to 9:
/* 
console.log((Math.random() * 10))
console.log(Math.floor(Math.random() * 10));

console.log((Math.random() * 11))
console.log((Math.random() * 100))
console.log((Math.random() * 101)) 
*/


/* 
console.log(Math.random());
console.log(Math.random() *10);
console.log(Math.floor(Math.random() *10));
console.log('<-->')


console.log(Math.random() *11);
console.log(Math.floor(Math.random() *11));
console.log('<-->')


console.log(Math.floor(Math.random() *10)+1);
console.log(Math.floor(Math.random() *100)+1);
console.log('<-->')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//   This JavaScript function always returns a random number between min and max (both included):

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } */



//todo: 32-boolean data types

/* let x =null;
// let x ='';
// let x =-0;
console.log(Boolean(x)); */


//todo: 33-ternary(conditional)operator
/* 
let age = 18;
let roll = 20;
if (age >= 18)
    console.log('yes')
else
    console.log('no')

console.log((roll > 20 ? "yes" : "no"));

console.log(roll >= 20 ? (roll < 30) ? "Big" : "small" : no); */


//todo: The Nullish Coalescing Operator (??)
/* 
The ?? operator returns the first argument if it is not nullish (null or undefined).Otherwise it returns the second argument */

/* let name = "null";
// let name = null;
let text = "undefined";
// let text = "missing";
let result = name ?? text;

console.log(result) */


// todo: 33-conditions

// todo: for-in-loop : for objects

/* const person = {fname:"Bappa", lname:"Saha", age:25};

for (const x in person) {
    console.log(x,":",person[x])
}; */

/* const numbers = [45, 4, 9, 16, 25];
for(let number in numbers){
    console.log(number,":",numbers[number])
} */


//todo: for-of-loop: for arrays

// const numbers = [45, 4, 9, 16, 25];
// for(let number of numbers){
//     console.log(number)
// }

// todo: 41- Sets

/* // Create a Set
const letters = new Set(["a","b","c"]);
const mySet =new Set();

letters.add("e");
letters.add("p");
letters.add("a");
letters.add("a");
letters.add("a");
console.log(letters);
console.log(letters.size) */
/* 
const letters = new Set(["a","b","c","f","g","h"]);

let text ="";
letters.forEach(value=>{
    return text=text+value
});
console.log(text) */


//todo: 43-type of operator
/*
 "John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
 */

/* function isArray(myArray){
    // console.log(myArray.constructor);
    // console.log(myArray.constructor.toString());
//    return console.log(myArray.constructor.toString().indexOf('Array')> -1);
    return myArray.constructor ===Array;

};

const arr =[1,3,5,2,8]
console.log(isArray(arr)); */


//todo: 44-type conversion

/* let x="80789";
console.log(Number("888"));
console.log(Number(""));

let y=+x;
console.log(y);
 */

// todo: 46- regular expression

/* 
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
let n1 =text.search(/w3Schools/);
let n2 =text.search(/w3Schools/i);

console.log(n);
console.log(n1);
console.log(n2); 
*/

/* 
let text = "Visit Microsoft dada";
let result = text.replace("Microsoft", "Bappa");
let result1 = text.replace(/microsoft/i, "Bappa");

console.log(result);
console.log(result1);
 */

/* 
let text ="Visit Microsoft  not good at microsoft";
let ans =text.replace(/microsoft/i,"google");
let ans1 =text.replace(/microsoft/ig,"google");

console.log(ans);
console.log(ans1);

*/

/* 
let pattern ="There is a abcd boy and abcef";
let text = "123456789";
let ans = pattern.match(/[is]/g);
let ans1 =text.match(/[1-4]/g);
let ans2 =text.search(/[1-4]/g);


console.log(ans);
console.log(ans1);
console.log(ans2);
 */


//todo: 47-js errors

// let x='';
// let x=5;
/* let x=12;

try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw {
        message:`${x} is too high`,
        name:"High error"
    }
}
catch (err) {
   console.log(err)
}
finally{
    console.log("Pass the test");
}
 */

//todo: 51- this keyword

/*
 Rules:
    01. Implicit binding
    02. Explicit binding
    03. Explicit binding
    04. window binding
 */


/*
 var printPlayerName =function(name){
    console.log(name)
}
printPlayerName() ; 
*/

//todo: ---> 01. Implicit binding
/*
 var sakib= {
    name:"Sakib",
    age:35,
    printPlayerName:function(name){
        console.log(name);
        console.log(this.name);
    }
}
sakib.printPlayerName();
 */


/* 
var printPlayerNameFunction =function(obj){
    obj.printPlayerName=function(){
        console.log(this.name)
    }
};

var rakib ={
    name:"RAKIB",
    age:40,
};
var tamim ={
    name:"TAMIM",
    age:30,
};

printPlayerNameFunction(rakib);
printPlayerNameFunction(tamim);

rakib.printPlayerName();
tamim.printPlayerName(); 

*/

/* 
var personFun =function(name, age){
    return{
        name:name,
        age:age,
        printName:function(){
            console.log(this.name,this.age);
        },
        father:{
            name:"Mr. Rahim dad",
            printName:function(){
                console.log(this.name)
            }
        }
    }
};

var sakib= personFun('sakib',35);
sakib.printName();
sakib.father.printName();
 */


//todo: Explicite Binding


/* var printName= function (){
    console.log(this.name)
};

var sakib= {
    name:"Sakib",
    age:35,
    // printPlayerName:function(name){
    //     console.log(name);
    //     console.log(this.name);
    // }
};

printName.call(sakib) */


//todo: new Binding
/* 
function player(name,age){
    //let this =Object.create(null)
    this.name =name;
    this.age =age;
    console.log(`${this.name} is ${this.age} years old.`);

    //return this;
};

var obj= new player("Sakib",34); */


//todo: window Binding


//todo: 53- class

/* class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    methodPlay(){
        console.log(`${this.name} is playing` )
    }
  };

  const myCar1 =new Car("Toyota",1996);
  const myCar2 =new Car("BMW",1995);

//   console.log(myCar1);
//   console.log(myCar2);

  myCar1.methodPlay(); */


//todo: 54-JSON
//todo; convert text to valid json format
/* 
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj =JSON.parse(text);

console.log(text);
console.log('------------------------');
console.log(obj);
console.log('------------------------');
console.log('------------------------');
console.log(obj?.employees);
console.log(obj.employees[0]);
console.log(obj.employees[0].firstName); */


//todo: convert valid js object to text:

/* let person={
    firstName:"bappa",
    lastName:"saha",
    age:26
};

const convertTojson =JSON.stringify(person);
console.log(convertTojson); */


//todo: 62- Objects


const person1 = {};
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

console.log(person1);



 const person = new Object();
person.firstName = "bappa";
person.lastName = "saha";
person.age = 51;
person.eyeColor = "blue";

console.log(person); 



//todo: 63-Object Properties

const human ={
    name:"bappa",
    age:26
};
human.country='Bangladesh';
human.age=12;

let c ='country'

// console.log(human)
console.log(human.age);
console.log(human['age']);
console.log(human[c]);



 const person2 = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  let text ='';
  for (let x in person2) {
    // console.log(x)
    // text += person2[x];
    text = text + person2[x]+ ' ';
  }

  console.log(text); 
  
 

// todo: nested {[]}

const myObj = {
    name: "John",
    age: 30,
    cars: [
        {
         name: "Ford",
         models: ["Fiesta", "Focus", "Mustang"] 
         },
        { name: "BMW",
         models: ["320", "X3", "X5"] 
        },
        { name: "Fiat",
         models: ["500", "Panda"]
        }
    ]
}

console.log(myObj);
console.log(myObj?.cars[2]?.models[1]);

for(let i in myObj){
    console.log(i);
}

for(let i in myObj?.cars){
    console.log(i);
    console.log(myObj.cars[i]);
    console.log(myObj.cars[i]?.models);
    console.log(myObj.cars[i]?.models[2]);
   
}

// todo: adding method to obj

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
person.age =55;
person.newMethod=function(){
    return this.id;
}

console.log(person);
console.log(person.newMethod());
console.dir(typeof person.fullName);

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// console.log(person);
console.log(Object.values(person))

document.getElementById('demo').innerHTML=person.name + " is " +person.age


//todo: 66-Object Accessors

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "engllish",
    city:"",
    get lang() {
      return this.language;
    },
    get fullname(){
        return this.firstName+ " " + this.lastName;
    },
    set country(country){
        this.city=country
    }
};

person.country="Nepal"

// console.log(person.lang);
// console.log(person.fullname);
console.log(person);



//todo: object constructor

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName=function(){
        return this.firstName+ " " + this.lastName;
    }
}


console.log(Person);

const bappa =new Person('bappa','saha',26,'black');
const kaka =new Person('kaka','saha',23,'red');

bappa.country ="Bangladesh";


console.log(bappa);
console.log('-------------------------------');
console.log(kaka);


console.log(bappa.fullName())


//todo: 72-functions

sleep()

function sleep(){
    // console.log('hoisted this functon');
} 


asleep();
const asleep =function(){
    console.log('not hoisting')
}


function add(a,b){
    return a+b;
}



function mul(a,b){
    return a*b;
}



function cal(){
    let a =add(2,4)
    let b=mul(2,4)
    console.log(a,b)
    return a+b;
}

cal();