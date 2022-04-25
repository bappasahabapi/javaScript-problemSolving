# Questions:

0.  [Console Log](#0)

1.  [Apply javaScript Concepts](#1)

2.  [While Loop & for loop:](#2)

3.  [Write a function](#3)

4.  [Simple calculation using function:](#4)

5.  [Factorial code](#5)

6.  [Declear Objects and its property](#6)

<a name="1">

## 1.Apply javaScript Concepts

        >> Variables
        >> Conditions
        >> Array
        >> Function
        >> Loop

</a>
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

```
console.log('"This is console.log tutorial by coder bappa"')
console.time('my code took time:');
console.log("with out using semicolon")
console.log("using semicolon ");
console.log(10 + 10)
console.log(34) //mathematics operation
console.log(true); //boolen variable

```

### 2. write string in javaScript

```
console.log("using double quotation")
console.log('using single quotation')
console.log('"using double quotation under single quotation"')
console.log(`backtag <h1> <h1/>`)
```

### 3. console log Array

```
console.log([11, 22, 33, 44]);
```

### 4. console log e Object lock করতে পারি চাইলে

```
console.log({ bappa: 'coder bappa', age: '25' })
console.table({ bappa: 'coder bappa', age: '25' })
console.warn('this is a warning')

console.timeEnd('my code took time:');
console.assert(500 < 179, 'Age > 179 is not possible ');
console.error('this is an error')
```

### 5. console.clear();

```
console.time('my code took time:');
console.timeEnd('my code took time:');
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
