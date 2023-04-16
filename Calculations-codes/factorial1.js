/* 
    Basic  of Factorial (!)
 1! = 1
 2! = 2 X 1
 3! = 3 X 2 X 1
 4! = 4 X 3 X 2 X 1
 5! = 5 X 4 X 3 X 2 X 1
 6! = 6 X 5 X 4 X 3 X 2 X 1
 7! = 7 X 6 X 5 X 4 X 3 X 2 X 1

*/

//                  --> 4.Calculate Factorial number using for loop
var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;

}
console.log(factorial);
// -->


// --> 2.Calculate Factorial number multiple time useing function

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var givenNumber = getFactorial(7);
console.log("The factorial of 7 is:", givenNumber);


//-->

//  --> 3.Calculate Factorial using decremental loop


function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

let givenNumber = getFactorial(6);
console.log("The factorial of 6 is:", givenNumber);



// 4.Calculate Factorial in recursive function

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log("Factorial is: ", myFactorial);