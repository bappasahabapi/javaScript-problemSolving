function findSmall(a, b, c) {

    if (a < b && a < c) {

        return a;
    }
    else if (b < a && b < c) {

        return b;
    }
    else {

        return c;
    }

}
const small = findSmall(120, 34, 60);
console.log("small number is : ", small);
