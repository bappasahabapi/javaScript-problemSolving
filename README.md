# JavaScript problems & coding solution

> There is a dreamy boy whose name is bappa shaa.

<p align="center">
  <a href=https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions>
    <img src=https://bappa-saha.web.app/static/media/bappa.42073d04.png  alt="bappa Logo">
  </a>
 </p>

> Click :star:if you like the project. Pull Requests are highly appreciated. Follow me [@BappaSaha](https://bappa-saha.web.app) for technical updates.

# Questions:

00. [object-destructuring](#00)

0.  [Console Log](#0)

1.  [Apply javaScript Concepts](#1)

2.  [While Loop & for loop:](#2)

         1.print a number from 0 to 10
         2.print a number from 1 to 10
         3.print the even number from 0 -20
         4. print the odd number from 0-20

3.  [Write a function-->function1.js](#3)

         1. wite a function having no parametaer.
         2. A function havig input parameters.
         3. A fucntion havng a return value

4.  [Simple calculation using function:](#4)

5.  [Factorial code](#5)

6.  [Declear Objects and its property](#6)

7.  [Mathe and rdandom number code -> mathe.js](#7)

8.  [swap variable / swap without temp/ desturting--> swap.js](#8)

9.  [Find the max number from the inputs (i code it three ways)-->max-number.js](#9)

10. [Find the min number from the(2/3) inputs --> min-number.js](#10)

11. [Array Related problem --> sum-array.js](#11)

        1. Sum of array using for loop-->sum-array.js
        2. Sum of array using function-->sum-array.js
        3. Find the largest number of an array -->largest-element.js
        4. Find the smallest elements of an array -->smallest-element.js

<a name="00">

## 00.Map-Filter-Find

```js
const products=[
    {id:1 , name:'water-bottol',price: 50, color: 'yellow'},
    {id:2 , name:'pen-bottol', price: 507, color: 'black'},
    {id:3 , name:'cock-bottol',price: 503, color: 'black'},
    {id:4 , name:'soft-bottol',price: 506, color: 'red'},
    {id:5 , name:'note-bottol',price: 507, color: 'pink'}
]

//TODO: map
console.log('Map:--------->')
const product =products.map(product=>console.log(product))
const productName=products.map(p=>p.name)
// console.log(productName)

console.log('Filter:-------->')
//TODO: filter

const price=products.filter(product=>product.price >506)
const blacks=products.filter(p=>p.color==='black')
console.log(blacks)
// console.log(price)

//TODO: find
console.log('Find:-------->')
const id =products.find(pId=>pId.id===2)
console.log(id)

```

<a name="1">

## 1.Apply javaScript Concepts

        >> Data tyes
        >> Variables
        >> Conditions
        >> Array
        >> Function
        >> Loop

### [Data Types] :

    There are 2 types of data-types:
    1.Primitive : (stack)-->
        [string,numbers, boolean ,null,undifine, symbol]

    2.Referance: (heap)-->
        [Arrays,object literals,functions, dates]

        => It works dinnamically means , we don't need to write the     datatype.

#### primitive data types :\_

console.log('"Primitive data types"')

#### String :

```javascript
let bname = "bappa";
var sname = " saha";
console.log("my string is :" + bname);
console.log("Data type is :" + typeof bname);
```

#### Numbers :

```javascript
let num = 32;
console.log("number is : " + num);
console.log("Data type is :" + typeof num);
```

#### Boolean:

```javascript
let isPlayer = true;
console.log("Bappa is a player ");
console.log(isPlayer);
console.log("Data type is :" + typeof isPlayer);
```

#### Null :

```javascript
let nullVar = null;
console.log(nullVar);
console.log("Data type is :" + typeof nullVar);
```

#### Undefined :

```javascript
let undef = undefined;
console.log(undef);
console.log("Data type is :" + typeof undef);
```

#### Reference data types :

```javascript
console.log(' "Referance data types" ');
```

#### Array :

```javascript
myarr = [1, 2, 3, 4, 5, false, "string"];
console.log(myarr);
console.table(myarr);
console.log("Data type is :" + typeof myarr);
```

#### Object literals :

```javascript
let marks = {
bappa: 90,
doll: 91,
burii: 23,
' mis mayaboti': 44
}

console.log(marks);
console.log("Data type is :" + (typeof marks));

function findName(params) {

}
console.log("Data type is :" + (typeof findName));

let date = new Date();
console.log("Data type is :" + (typeof date));
</a>
```

### [Variables] :

Variables in JavaScript :

There are threee types of variables in javascript.
They all are keywords.

```javascript
01.var type(global),
02.const type(local ),
03.let type.(block level scope)

                // var type: global
                // var used in old javascript
```

```javascript
var nam = `'coder'bappa.`;
console.log(nam);

var youtube;
youtube = "gogabappa";
console.log(youtube);

var marks = 46;
var mark = "46";
console.log("this is value not string  ", marks);
console.log(nam, youtube, marks, mark);
```

#### Rules:

```
 --> Rules for creating javascript variables:
       01. can not start with numbers.
       02. can start with letters, underscore(_), dollars($).
       03. Case-sensitive.
            i.camelCase
            ii.kabab-case
            iii.snake_case
            iv.PascalCase
```

#### Examples:

```javascript
var city = "Dhaka";
console.log(city);
var _city1 = "Dhaka"; //not used in morder javascript.
var $city2 = "Dhaka"; //not used in morder javascript.

// const variable : local

// const variable : where the value is fixed
//  Assignment to constant variable is not allowed in const type
// when makimg const , we have to initialize it .

const fName = " bappa";
fName = "saha"; // Uncaught TypeError: Assignment to constant variable.
console.log(fName);

//let variable: block level scope

// let used in moder javascipt replacement of var .
{
  let city = "Thakurgaon";
  console.log(city); // output:Thakurgaon
  city = "khulna";
  console.log(city); // output:khulna
}
console.log(city); // output:Dhaka

// some cool things of array
const array1 = [11, 22, 33, 44, "bappa"];
array1.push(55);
console.log(array1); // [11, 22, 33, 44, "bappa", 55]
array1.pop();
console.log(array1); //  [11, 22, 33, 44, "bappa"]
```

<!-- <a> </a> -->
<a name="2">

## 2. While Loop| & for loop:

        1.print a number from 0 to 10
        2.print a number from 1 to 10
        3.print the even number from 0 -20
        4. print the odd number from 0-20

</a>
<a name="3">

## 3. Write a function:

        1. wite a function having no parametaer.
        2. A function havig input parameters.
        3. A fucntion havng a return value

</a>
<a name="4">

## 4. Simple calculation using function:

        1.Addition|Slubtraction|Multiplication|Division numbers.
        2. Unit Convert Inch to feet , miles to kilometers
        3.Cheeck odd or even number using a function

</a>

## 5. Calculate factorial in various way:

        1.Calculate Factorial number using for loop
        2.Calculate Factorial number using function
        3. Calculate Factorial using decremental loop
        4.Calculate Factorial in recursive function

<a name="6"> 
##  6. Declear Objects and its property:

        1. Declear & Access  a object .
        2. Different ways to set a object property of an object.

</a>

---

---

<a name="0">

**_ --> All About Console Log <-- _**

#### single line Comment (ctr + /)

#### multiline comment (shift + alt + A)

### 1.How to print anythinig in console log:

_Console log means :_ console এ লিখে দাও যেইভাবে লিখা আছে সেইভাবেই।
JavaScript is a forgiven language .

```javascript
console.log('"This is console.log tutorial by coder bappa"');
console.time("my code took time:");
console.log("with out using semicolon");
console.log("using semicolon ");
console.log(10 + 10);
console.log(34); //mathematics operation
console.log(true); //boolen variable
```

### 2. write string in javaScript

```javascript
console.log("using double quotation");
console.log("using single quotation");
console.log('"using double quotation under single quotation"');
console.log(`backtag <h1> <h1/>`);
```

### 3. console log Array

```javascript
console.log([11, 22, 33, 44]);
```

### 4. console log e Object lock করতে পারি চাইলে

```javascript
console.log({ bappa: "coder bappa", age: "25" });
console.table({ bappa: "coder bappa", age: "25" });
console.warn("this is a warning");

console.timeEnd("my code took time:");
console.assert(500 < 179, "Age > 179 is not possible ");
console.error("this is an error");
```

### 5. console.clear();

```javascript
console.time("my code took time:");
console.timeEnd("my code took time:");
```

</a>

<a name="5">

**_ --> Factorial code <-- _**

```
/*
    Basic  of Factorial (!)
 1! = 1
 2! = 2 X 1  = 2 X 1!
 3! = 3 X 2 X 1 = 3 X 2!
 4! = 4 X 3 X 2 X 1
 5! = 5 X 4 X 3 X 2 X 1
 6! = 6 X 5 X 4 X 3 X 2 X 1
 7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
 7! = 7 X 6!
 n! = n X 9(n-1)!


*/
```

### 1. Calculate Factorial number using for loop:

```
       Output is : 120
```

```javascript
var factorial = 1;
for (var i = 1; i <= 5; i++) {
  factorial = factorial * i;
}
console.log(factorial);
```

### 2. Calculate Factorial number multiple time using function:

```
   Output is :    The factorial of 7 is: 5040
```

```javascript
function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let givenNumber = getFactorial(7);
console.log("The factorial of 7 is:", givenNumber);
```

### 3. .Calculate Factorial using decremental loop:

```
   Output is :    The factorial of 6 is: 720
```

```javascript
function getFactorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

let givenNumber = getFactorial(6);
console.log("The factorial of 6 is:", givenNumber);
```

### 4. .Calculate Factorial using recursive function :

```
   Output is : Factorial is:  120
```

```javascript
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log("Factorial is: ", myFactorial);
```

</a>

<a name="8">

### Swap variable:

    output is:
    Before swapping:  5 7
    After swapping:  7 5

```javascript
let first = 5;
let second = 7;
console.log("Before swapping: ", first, second);

var temp = first;
first = second;
second = temp;
console.log("After swapping: ", first, second);
</a>
```

### Using destructing:

    output is:
    Before swapping:  10 40
    After swapping:  40 10

```javascript
var first = 10;
var second = 40;
console.log("Before swapping: ", first, second);

// Array Distructing
[first, second] = [second, first];
console.log("After swapping: ", first, second);
```
