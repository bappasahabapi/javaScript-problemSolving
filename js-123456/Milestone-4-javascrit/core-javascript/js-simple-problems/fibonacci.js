// [0, 1,  1, 2, 3, 5, 8, 13, 21, 34 ]...

// 0+1 = 1
// 1+1 =2 
// 2+1 = 3
// 3rd = 2nd + 1st;
// 4th = 3rd + 2nd
// nth = (n-1)th + (n-2)th
// ith = (i-1)th + (i-2)th
// Xn+2= Xn+1 + Xn

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {

    // i-th = (i-1)th + (i-2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

