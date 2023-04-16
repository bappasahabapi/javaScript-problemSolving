function factorialRecursive(n) {

    if (n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);

}

const factNumber = factorialRecursive(5);
console.log(factNumber);
