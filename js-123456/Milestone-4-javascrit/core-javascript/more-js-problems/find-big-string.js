let names = ["bappada", " dhimandada", " rahulman"];
let maxLength = names[0].length;
for (let i = 0; i < names.length; i++) {
    if (names[i].length > maxLength) {
        maxLength = names[i].length;
        console.log(names[i]);

    }

}