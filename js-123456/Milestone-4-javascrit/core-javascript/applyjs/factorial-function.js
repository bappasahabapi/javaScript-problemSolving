var factorial = 1;
function getFactorial(n) {
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var mynumber = getFactorial(5);
console.log('Factorial of 5 is:', mynumber);

// var mynumber1 = getFactorial(4);
// console.log('Factorial of 5 is:', mynumber1);