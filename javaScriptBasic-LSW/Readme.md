`overview.md: `https://github.com/bappasahabapi/javaScript-problemSolving/blob/main/javaScriptBasic-LSW/overview.md


`todo:1- লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা randomly print করতে পারি । `

`todo:2- সবার নাম কিভাবে Alphabetically  সাজাতে পারি । `

`todo:3- how to sort roll number low to high`

`todo: 4- is the year leap year or not `

`todo: 5- how many vowels in sentence`

`todo: 6- find the duplicate number from an array`

`todo: 7- find the unique number from an array`

`todo: 8- how many time "bappa" word is used in the sentence and what is the first position where bappa word is used?`

`todo: 9- input: linearSearch(['a','b','c','d','c'], 'c'); output: 2 or 'not found' ; problem: linearSearch() টি  function implement করে দেখান । `

`todo: 10- find out the max big string from an array and show the index of the string`

`
`todo: 11- ১ -১০০ পর্যন্ত যেই সংখ্যা গুলো ৩,৫ এবং ৩,৫ উভয় সংখ্যা দিয়ে বিভাজ্য তা বের কর ;`

`todo: 12- Array থেকে কিভাবে 'falsy value' খুঁজে বের করে বাদ দিতে পারি? `

`todo: 13- Object থেকে কিভাবে 'falsy value' খুঁজে বের করে বাদ দিতে পারি?`




**🥇todo:1- লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা randomly print করতে পারি ।**

```js
function getRandomNumber(min, max){
    return Math.floor(Math.random() *(max-min +1)) + min;
}

console.log(getRandomNumber(1,6));

```

**🥇todo:2- সবার নাম কিভাবে Alphabetically  সাজাতে পারি ।**
```js
const std = ["bappa","kaoa","dafda","apple"];
console.log(std.sort());
```

**🥇todo:3- how to sort roll number low to high**
```js

const rollNumebers = [40, 100, 1, 5, 25, 10];

function myFuc(a,b){
    return a-b;
};

console.log(rollNumebers.sort(myFuc))


//shortcut
const rollNumebers = [40, 100, 1, 5, 25, 10];
console.log(rollNumebers.sort((a,b)=>{return a-b})) // assending
// console.log(rollNumebers.sort((a,b)=>{return b-a})) //decending
```

**🥇todo: 4- is the year leap year or not**

```js
function isLeapyear(year){
    if(year%400 ===0 || ((year %4 ===0) && (year % 100 !==0))){
        console.log(`${year} is Leap year`);
    }
    else 
        console.log('not');
};

isLeapyear(2020);

```

**🥇todo: 5- how many vowels in sentence**

```js
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
```

**🥇todo: 6- find the duplicate number from an array**
```js
const numbers =[1,2,4,5,6,6,1,5,76,,89,76,90,25];

const duplicate =numbers.filter((value,index, array)=>{
    return array.indexOf(value)!==index;
});

console.log(duplicate);
```

**🥇todo: 7- find the unique number from an array**

```js
const numbers1 =[1,2,4,5,6,6,1,5,76,,89,76,90,25];

const unique =numbers.filter((value,index, array)=>{
    return array.indexOf(value)===index;
});
console.log('---');
console.log(unique);
```

**🥇todo: 8- how many time "bappa" word is used in the sentence and what is the first position where bappa word is used?**


This type of problem is solved by using regular expression 
1. regular exp er vittore search string ta dibo
2. ig flag ta dibo.
3. jotogulo ans pabo ta ekta array tai array er length tai ans

solve:
first position mane search() ta dilei hbe

```js

const sentence ="There is a dreamy boy nameed Bappa.There is a dreamy boy nameed bappa.There is a dreamy boy nameed bappa.There is a dreamy boy."

const matches =sentence.match(/bappa/ig);
const occurances =matches? matches.length : 0;
console.log(matches, occurances)


let position =sentence.search(/bappa/i);
position= position>=0 ? position : "not found";
console.log(position)
```

**🥇todo: 9- input: linearSearch(['a','b','c','d','c'], 'c'); output: 2 or 'not found' ; problem: linearSearch() টি  function implement করে দেখান ।**

```js
function linearSearch(arr,value){

    const length =arr.length;
    for(let i =0; i<length; i++){
        if(arr[i]===value){
            return i;
        }
    }
    return "not found";
}

console.log(linearSearch(['a','b','c','d','c'], 'c'));
```

**🥇todo: 10- find out the max big string from an array and show the index of the string**

```js
function longestString(names){
    let longestWord ='';
    for(n of names){
        if(n.length > longestWord.length){
            longestWord =n;
        }
    }
    return [longestWord, names.indexOf(longestWord)]

}

const nameArray=['Bappa saha', 'learn with bappa','akash','akash mohajoon','dad'];

console.log(longestString(nameArray));
```


**🥇todo: 11- ১ -১০০ পর্যন্ত যেই সংখ্যা গুলো ৩,৫ এবং ৩,৫ উভয় সংখ্যা দিয়ে বিভাজ্য তা বের কর ;**

```js
function fooBar(number){
    
    for (let i =1; i<=number; i++){
        if(i%3===0 && i%5===0){
            console.log(`${i} is fooBar number`);
        }
        else if(i%3===0){
            console.log(`${i} is divied by 3`);
        }
        else if(i%5 ===0){
            console.log(`${i} is divied by 5`)
        }
        else{
            console.log(`${i} is not  divied by 3 or 5`);
        }
    }
}

console.log(fooBar(100));
```

**🥇todo: 12- Array থেকে কিভাবে 'falsy value' খুঁজে বের করে বাদ দিতে পারি?**

/* 
falsy values are: 6 types
    false, undefined, null, '', NaN, 0
solve: using filter()

*/
```js
const mixedArr =[
    "bws",
    undefined,
    "learn with bappa",
    0,
    false,
    "",
    "apple",
    null,
    40,
    "k",
    true,
    "Thanks all",
    NaN
];


const trueArray =mixedArr.filter(element=>{
    if(element){
        return true;
    }else{
        return false
    }
})
console.table(trueArray)


// const  trueArray1 =mixedArr.filter(Boolean)
// console.table(trueArray1)

```
**todo: 13- Object থেকে কিভাবে 'falsy value' খুঁজে বের করে বাদ দিতে পারি?**

```js
const obj ={

    a:"bws",
    b:undefined,
    c:"learn with bappa",
    d:0,
    e:false,
    f:"",
    g:"apple",
    h:null,
    i:40,
    j:"k",
    k:true,
    l:"Thanks all",
    m:NaN
};

const trutyObj =function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(trutyObj(obj))


```