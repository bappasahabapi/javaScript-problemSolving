

const ages = [23, 34, 55, 66, 11, 55, 22, 44, 11, 23, 66, 77, 88, 99, 12, 55];

function removeDuplicateNumber(number) {
    const unique = [];

    for (const i of number) {
        if (unique.indexOf(i) == -1) {
            unique.push(i);
        }
        else {
            console.log("The dublicate numbers are:" + i);
        }
    }
    return unique;
}

const example = removeDuplicateNumber(ages);
console.log(example);

