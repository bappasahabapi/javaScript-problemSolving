// 1. Declear a object 
// it has a key and a value 

var student1 = {
    id: 10,
    name: 'bappa',
    age: 24,
    class: "seven"
};
console.log(student1);
console.log(student1.id, student1.name);
var age = student1.age;
console.log("age is: ", age);

// set a property to student1 object
student1.class = "ten";
// console.log(student1);

// -->


//      2. Different ways to set a object property of an object.

student1.class = "five";
student1["class"] = "eight";
// -->

