
function fibonacciSeries(num) {

    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {

        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;

}

let example = fibonacciSeries(10);
console.log(example);
