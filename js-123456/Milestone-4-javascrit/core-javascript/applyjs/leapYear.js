function isLeapYear(year) {
    if (year % 4 == 0) {
        // return console.log('Year is leapyear', year);
        return true;
    }
    else {
        // return console.log('Not leapyear', year);
        return false;

    }
}

const year1 = 2087;
const isyear1 = isLeapYear(year1);
console.log(isyear1);
