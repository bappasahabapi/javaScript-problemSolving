//todo: call back function
// if we send a functin parameter inside a function.

function greeting(input,name){
    console.log(input);
    greetingHandler(name);
}

const name ='bappa';
const number =34;
const arr =[23,24,66];
const obj={
    type:"Laptop",
    modeel:'asus 556r',
    price:34000
}
function greetingHandler(name){
    return console.log('good morning',name)
}
function goodEvenning(name){
    return console.log('good eveining',name)
}
function goodNight(name){
    return console.log('good night',name)
}

// greeting(obj)
// greeting(greetingHandler,'bappa')
// greeting(greetingHandler())

// greeting(greetingHandler,'Bappa');
// greeting(goodEvenning,'Bappa');
// greeting(goodNight,'Bappa');




//todo: call back function 

// example -1

function myFirst() {
    console.log('first is calling')
  }
  
  function mySecond() {
   console.log('second is calling')
  }
  
//   mySecond();
//   myFirst();
// ------------------- 



//   example -2
 /*
   function DisplayFunc(finalResult) {
   console.log(finalResult)
  }

  function mul(a,b){
    let mul =a*b;
    return mul;
  }
  
  function sum(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  function myCalculator(mul, sum) {
    let ans = mul + sum
    return ans;
  }
  
  let result = myCalculator(mul(2,5),sum(4,4));
mul(2,5);
sum(4,4);

// let result=myCalculator(mul,sum);
DisplayFunc(result); // 18
 */


// example-3 

/* function DisplayFunc(finalResult) {
    console.log(finalResult)
   }
 
   function mul(a,b){
     let mul =a*b;
     return mul;
   }
   
   function sum(num1, num2) {
     let sum = num1 + num2;
     return sum;
   }
   function myCalculator(mul, sum) {
   
     let ans = mul + sum
     DisplayFunc(ans);

   }
   
   myCalculator(mul(2,5),sum(4,4));
//    myCalculator(5,5); 

*/

// example-4  : here we use the callback

function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    if(myCallback){
        myCallback(sum);
    }
    
  }
  
  // myCalculator(5, 5, myDisplayer);