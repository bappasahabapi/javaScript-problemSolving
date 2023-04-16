function getFactorial(n) {
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myNumber = getFactorial(5);
console.log(myNumber);
