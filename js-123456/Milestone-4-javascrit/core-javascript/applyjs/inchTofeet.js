function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}



var myinches = 132;
var feet = inchToFeet(myinches);
console.log("Myinches in feet is =", feet);

var brother = 144;
var feet = inchToFeet(brother);
console.log("Brother in  feet is =", feet);

var sister = 156;
var feet = inchToFeet(sister);
console.log("Sister in feet is =", feet);
