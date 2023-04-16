const greetings = 'Hello, how are you ?';

function reverseString(text) {

    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;

    }
    return reverse;

}

const character = reverseString(greetings);
console.log(character);
