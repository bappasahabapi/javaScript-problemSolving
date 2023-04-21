function findLargest(a, b, c) {

    if (a > b && a > c) {
        console.log("a is big number", a);
        return a;
    }
    else if (b > a && b > c) {
        console.log("b is big number ", b);
        return b;
    }
    else {
        // console.log("c is the big number ", c);
        return c;
    }

}
const large = findLargest(12, 34, 60);
console.log("Large number is : ", large);



/*
       // 3rd way

const a = 450;
const b = 350;
const c = 600;

var max = Math.max(a, b, c);
var min = Math.min(a, b, c);
console.log("big value is = " + max);
console.log("small value is = ", min);

*/


/*
// Compare three number  2nd process
const a = 450;
const b = 350;
const c = 600;

if (a > b && a > c) {
  console.log("a is big number", a);
}
else if (b > a && b > c) {
  console.log("b is big number ", b);
}
else {
  console.log("c is the big number ", c);
}
*/



/*
       // first process
const business = 450;
const minister = 350;

if (business > minister) {
   console.log("Business is big amount");
}
else {
   console.log("minister is big amount");
}
*/