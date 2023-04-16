// vatiable

var time = '10:15pm';
var price = 150;
var isWhiteColor = false;

// let variable: value is not changed.

let name = 'Bappa';
console.log(name);

// const variable
const fName = 'saha da ';


// array 
var partners = [' bappa', 'kappa ', 'dhappa ', 'tappa '];
var elementCount = partners.length;
var bappaIndex = partners.indexOf('bappa');
partners.push('rahul');
partners.pop();

// Conditionals
if (bookPrice < 120) {
    console.log('I will buy this book');

}
else {
    console.log('kinbo na tor boi');

}

// loop

var i = 0;
while (i <= 15) {
    // do some awesome work 
    i++;
}

for (var i = 1; i < 14; i++) {
    // console.log(i);


}

// function 
function janPaki() {

    if (time > 19 && time <= 5) {

        return true;
    }
    return false;
}
janPaki();  // function call
var fcall = janPaki();