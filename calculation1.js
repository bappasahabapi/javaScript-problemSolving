
//  1.Addition|Slubtraction|Multiplication|Division numbers.

function addNumbers(num1, num2) {
    console.log("Iputs are: ", num1, num2);
    var addition = num1 + num2;
    return addition;
}

function subtraction(n1, n2) {
    var subtraction = n1 - n2;
    return subtraction;

}
function multiplication(n1, n2) {
    var multiplication = n1 * n2;
    return multiplication;

}
function division(n1, n2) {
    var division = n1 / n2;
    return division;
}

var a = 20;
var b = 30;

var Addition = addNumbers(a, b);
var Subtraction = subtraction(a, b);
var Multiplication = multiplication(a, b);
var Division = division(a, b);

console.log("Addition is :", Addition);
console.log("Subtracion is :", Subtraction);
console.log("Multiplication is :", Multiplication);
console.log("Division is : ", Division);

// -->
