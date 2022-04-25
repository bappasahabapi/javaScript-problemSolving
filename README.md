# Questions:

5.  [Factorial code](#fact1)

## 1.Apply javaScript Concepts

        >> Variables
        >> Conditions
        >> Array
        >> Function
        >> Loop

## 2. While Loop| & for loop:

        1.print a number from 0 to 10
        2.print a number from 1 to 10
        3.print the even number from 0 -20
        4. print the odd number from 0-20

## 3. Write a function(function simply means work ):

        1. wite a function having no parametaer.
        2. A function havig input parameters.
        3. A fucntion havng a return value

## 4. Simple calculation using function:

        1.Addition|Slubtraction|Multiplication|Division numbers.
        2. Unit Convert Inch to feet , miles to kilometers
        3.Cheeck odd or even number using a function

## 5. Calculate factorial in various way:

        1.Calculate Factorial number using for loop
        2.Calculate Factorial number using function
        3.Calculate Factorial in recursive function

## 6. Declear Objects and its property:

        1. Declear & Access  a object .
        2. Different ways to set a object property of an object.

<a name="fact1">
 
 ###  1.  Calculate Factorial number using for loop:
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

</a>
