function sleep(a,b){
    console.log(arguments);
    return a*b;
}

console.table(sleep(3,4,5,6))