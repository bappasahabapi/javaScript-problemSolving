//todo: 62- Objects

/* 
const person1 = {};
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

console.log(person1);
 */


/*  const person = new Object();
person.firstName = "bappa";
person.lastName = "saha";
person.age = 51;
person.eyeColor = "blue";

console.log(person); 
 */


//todo: 63-Object Properties

/* const human ={
    name:"bappa",
    age:26
};
human.country='Bangladesh';
human.age=12;

let c ='country'

// console.log(human)
console.log(human.age);
console.log(human['age']);
console.log(human[c]); */


/*
 const person2 = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  let text ='';
  for (let x in person2) {
    // console.log(x)
    // text += person2[x];
    text = text + person2[x]+ ' ';
  }

  console.log(text); 
  
  */

// todo: nested {[]}

const myObj = {
    name: "John",
    age: 30,
    cars: [
        {
         name: "Ford",
         models: ["Fiesta", "Focus", "Mustang"] 
         },
        { name: "BMW",
         models: ["320", "X3", "X5"] 
        },
        { name: "Fiat",
         models: ["500", "Panda"]
        }
    ]
}

// console.log(myObj);
// console.log(myObj?.cars[2]?.models[1]);

// for(let i in myObj){
//     console.log(i);
// }

for(let i in myObj?.cars){
    // console.log(i);
    // console.log(myObj.cars[i]);
    // console.log(myObj.cars[i]?.models);
    console.log(myObj.cars[i]?.models[2]);
   
}


