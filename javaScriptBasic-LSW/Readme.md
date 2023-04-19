`overview.md: `https://github.com/bappasahabapi/javaScript-problemSolving/blob/main/javaScriptBasic-LSW/overview.md


`todo:1- লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা randomly print করতে পারি । `

`todo:2- সবার নাম কিভাবে Alphabetically  সাজাতে পারি । `

`todo:3- how to sort roll number low to high`

`todo: 4- is the year leap year or not `

`todo: 5- how many vowels in sentence`

`todo: 6- find the duplicate number from an array`

`todo: 7- find the unique number from an array`

```js

//todo:1- লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা randomly print করতে পারি । 

function getRandomNumber(min, max){
    return Math.floor(Math.random() *(max-min +1)) + min;
}

console.log(getRandomNumber(1,6));


// todo:2- সবার নাম কিভাবে Alphabetically  সাজাতে পারি । 

const std = ["bappa","kaoa","dafda","apple"];
console.log(std.sort());

// todo:3- how to sort roll number low to high

// const rollNumebers = [40, 100, 1, 5, 25, 10];

// function myFuc(a,b){
//     return a-b;
// };

// console.log(rollNumebers.sort(myFuc))


//shortcut
const rollNumebers = [40, 100, 1, 5, 25, 10];
console.log(rollNumebers.sort((a,b)=>{return a-b})) // assending
// console.log(rollNumebers.sort((a,b)=>{return b-a})) //decending


//todo: 4- is the year leap year or not 

function isLeapyear(year){
    if(year%400 ===0 || ((year %4 ===0) && (year % 100 !==0))){
        console.log(`${year} is Leap year`);
    }
    else 
        console.log('not');
};

isLeapyear(2020);

//todo: 5- how many vowels in sentence

const vowels =["a","e","i","o","u","A","E","I","O","U"];

const countVowel=(sentence)=>{
    let count =0;
    const letters =Array.from(sentence);
    letters.forEach((letter)=>{
        if(vowels.includes(letter)){
            count++;
        }
    })
    return count;

};

console.log(countVowel("I love Bangladesh"));


//todo: 6- find the duplicate number from an array

const numbers =[1,2,4,5,6,6,1,5,76,,89,76,90,25];

const duplicate =numbers.filter((value,index, array)=>{
    return array.indexOf(value)!==index;
});

console.log(duplicate);


//todo: 7- find the unique number from an array

const numbers1 =[1,2,4,5,6,6,1,5,76,,89,76,90,25];

const unique =numbers.filter((value,index, array)=>{
    return array.indexOf(value)===index;
});
console.log('---');
console.log(unique);



```