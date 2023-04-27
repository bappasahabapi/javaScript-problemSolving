**todo: call back function**

// if we send a functin parameter inside a function.

```js
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

greeting(obj)
greeting(greetingHandler,'bappa')
greeting(greetingHandler())

greeting(greetingHandler,'Bappa');
greeting(goodEvenning,'Bappa');
greeting(goodNight,'Bappa');

```



**todo: 81-call back function**

example -1

```js
function myFirst() {
    console.log('first is calling')
  }
  
  function mySecond() {
   console.log('second is calling')
  }
  
//   mySecond();
//   myFirst();
// ------------------- 
```


   example -2

 ```js
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
```


example-3 

```js
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
     DisplayFunc(ans);

   }
   
   myCalculator(mul(2,5),sum(4,4));
//    myCalculator(5,5); 

```
 example-4  : here we use the callback

```js
function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    if(myCallback){
        myCallback(sum);
    }
    
  }
  
  myCalculator(5, 5, myDisplayer);

```
**todo: 82-Asynchoronous Behavior**

`example -1`
```js

function hello(){
  console.log('Line 1 code');
}

console.log('Line 2 code');
console.log('Line 3 code');
hello();
```
 


`exmaple-2`

```js
console.log('line 1 code ');
setTimeout(function(){
  console.log('Line 2 code ');
},3000);

setInterval(function(){
  console.log('calling setInterval by 2s')
},2000)

console.log('last line code');

```


**async callback example**
todo: example-2

```js
const isloggin = true;
const paymentSuccess = true;
const enrollClicked = true;
const score = 80;
const courseFinished = true;

//1st
function login(callback) {
    console.log('Step-1 Welcome to login page')
    setTimeout(() => {
        if (isloggin) {
            console.log('   Successfully logged in.');
            callback();
        } else {
            console.log('Login failed');
        }
    }, 3000);
}

// 2nd 
function payment(callback) {
    console.log('Step-2 Make the payment first');
    setTimeout(function () {
        if (paymentSuccess) {
            console.log('   Payment is completed');
            callback();

        } else {
            console.log('payment is not completed yet');
        }
    },3000)


}

// 3rd 
function enrol(callback) {
    console.log('setp-3 Course enrollment is in progress');

    setTimeout(function () {
        if (paymentSuccess) {
            console.log('   enrollment completed')
            callback();
        } else {
            console.log('Click the enrollment button')
        }
    }, 3000)

}

// 4th 
function courseProgress(callback) {
    console.log('setp-4 Course on progress');

    setTimeout(function () {
        if (score >= 80) {
            callback();
        } else {
            console.log('you could not get the marks for certificate');
        }
    }, 4000)
}

// 5th 
function getCertificate(callback) {
    console.log('setp-5 preparing your certificate');
    setTimeout(() => {
        if (courseFinished) {
            callback()
        }
        else {
            console.log('please finishd the procedure first');
        }

    }, 2000);
}

//6th
function finised() {
    console.log('setp-6 Congrats!!! you got the certificated');
    setTimeout(() => {
        console.log('   Thanks for the course')
    }, 2000);
}

// call the function

login(function () {
    payment(function () {
        enrol(function () {
            courseProgress(function () {
                getCertificate(finised);
            })
        })
    })
})



```