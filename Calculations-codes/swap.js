let first = 5;
let second = 7;
console.log("Before swapping: ", first, second);

var temp = first;
first = second;
second = temp;
console.log("After swapping: ", first, second);


var first1 = 10;
var second1 = 40;
console.log("Before swapping: ", first1, second1);

// Array Distructing 
[first1, second1] = [second1, first1]
console.log("After swapping: ", first1, second1);
