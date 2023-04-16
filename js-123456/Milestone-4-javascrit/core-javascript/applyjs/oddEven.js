// const number  = 4;
// const reminder = number % 2;
// console.log(reminder == 0 );
// console.log(number % 2 == 0 );

function isEven(number) {
    if (number % 2 == 0) {
        // console.log('Number is Even');
        return true;
    }
    else {
        // console.log('numbr is odd');
        return false;
    }
}

const myNumber = 161;
const isMyNumberEven = isEven(myNumber);
console.log('is my number is even: ', isMyNumberEven);


const herNumber = 160;
const isHerNumberEven = isEven(herNumber);
console.log('is her number is even: ', isHerNumberEven);


// isOdd function 

function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
const num1 = 140;
const isNum1 = isOdd(num1);
console.log('number1 is odd:', isNum1);


