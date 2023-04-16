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

let a= "10";
let b = 10;

console.log(isNaN(a))
console.log(isNaN(b))


