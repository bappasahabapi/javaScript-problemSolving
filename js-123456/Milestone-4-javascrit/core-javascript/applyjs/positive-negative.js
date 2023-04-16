// This is the function of calculating positive 
// and negative number


function positiveNegative(number) {

    if (number >= 0) {
        return console.log("number is positive:", number);
    }
    else {
        return console.log('number is negative:', number);

    }
}

var num1 = positiveNegative(-1);
console.log(num1);
