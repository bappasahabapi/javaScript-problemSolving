const names = ['tom', 'dom', 'cat', 'rat ', 'bat ', 'tom', 'dom', 'tom', 'vat'];
// console.log(names);
// for loop diya kichu korle for loop er bahire theke return korte hoi.

function removeDuplicate(names) {

    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }
    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }

    }
    return unique;

}
const example = removeDuplicate(names);
console.log(example);

