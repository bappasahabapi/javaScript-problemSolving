function isBig(a, b, c) {
    if (a > b && a > c) {
        console.log('a is the big number is', a);
        return a;
    }
    else if (b > a && b > c) {
        console.log('b is the big number', b);
        return b;
    }
    else {
        console.log('c is the big number', c);

        return c;
    }

}

var number1 = isBig(11, 12, 13);
console.log(" The bg number is : ", number1);
