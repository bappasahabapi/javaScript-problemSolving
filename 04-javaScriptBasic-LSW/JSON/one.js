
// looping through an object


const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

let text = "";
for (const x in myObj) {
  text += x + ", ";
}
console.log(text);
console.log(text.name);


/* 
const jsonTextString ='{"name":"John", "age":30, "city":"New York"}';
// console.log(jsonTextString);

// convert to valid js object

const convertedJsonObject =JSON.parse(jsonTextString);
// console.log(convertedJsonObject);
// console.log(convertedJsonObject.name)


const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text, function(key,value){
    console.log(`${key}-->${value}`);
    
});
console.log(myArr)
// console.log(myArr[0])

 */






/* const person={
    name:'bappa',
    age:89
};


// const obj= JSON.parse(person);
const obj= JSON.stringify(person);
console.log(obj)
console.log(person)
 */


