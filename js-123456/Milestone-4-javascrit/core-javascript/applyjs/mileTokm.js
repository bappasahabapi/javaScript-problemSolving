// miles to kilometers
function mileTokm(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileTokm(26.2);
console.log("Marathon in kilometer:", marathon, "km");
