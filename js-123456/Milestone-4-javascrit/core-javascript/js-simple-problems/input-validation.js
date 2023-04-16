
function fibonacciSeries(num) {

    // console.log(typeof num);
    if (typeof num != 'number') {
        return "Please give a number"
    }
    if (num < 2) {
        return 'Please enter a positive Number greater than 1';
    }


    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {

        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;

}

// let example = fibonacciSeries(5);
let example = fibonacciSeries(-3);
console.log(example);
