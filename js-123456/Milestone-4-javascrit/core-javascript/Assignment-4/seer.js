function seerToMon(seer) {
    if (seer == '' || seer == []) {
        return 'null string or null array is not accepted';
    }
    else if (seer < 0) {
        return 'please give positive  value greater than zero';
    }
    else {
        let mon = seer / 40;
        return mon;
    }

}
// error case 
// let myseers = '';
// let myseers = [];
// let myseers = -1;

// valid input 
let myseers = 120;
let result = seerToMon(myseers)
console.log(result);

