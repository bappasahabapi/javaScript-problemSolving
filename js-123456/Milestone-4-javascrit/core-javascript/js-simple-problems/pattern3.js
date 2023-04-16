let star = "\n";
let rows = 3;
let cols = 3;
for (let i = 1; i < rows; i++) {
    for (let j = 1; j <= cols; j++) {
        star = star + "*";
    }
    star = star + "\n";
}

console.log(star);

