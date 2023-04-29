/* 

// example:01

const flag =true;

console.log("Task-1 is done");

setTimeout(function(){
    if (flag) {
       console.log("Task-2 is done");
    }else{
        console.log('failed')
    }
}, 2000);

console.log("Task-3 is done");

 */

/* 

//example:02

const flag = true;

console.log("Task-1 is done");

//todo: promise definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (flag) {
        resolve("Task-2 is resolved");
    //   console.log("Task-2 is done");
    } else {
        reject('failed')
    //   console.log("failed");
    }
  }, 2000);
});

//todo:promise call
promise
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err);
    })

console.log("Task-3 is done");

 */

//todo: solve the callback hell using promise

const paymentSuccess = true;
const marks = 80;

//first
function enroll() {
  console.log("Step-1 Course enrollment is in progress...");

  const enrollPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 3000);
  });

  return enrollPromise;
}

//second
function progress() {
  console.log("step-2 Course on progress");

  const progressPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("you could not get the enough marks to get the certificate");
      }
    }, 3000);
  });

  return progressPromise;
}

//third
function getCertificate(callback) {
  console.log("step-3 preparing your certificate");

  const getCertificatePromise = new Promise(function (resolve) {
    setTimeout(() => {
    //   if (finish) {
    //     callback();
    //   } else {
        
    //   }
     resolve("   Congrats!!! you got the certificate ");
    }, 2000);
  });

  return getCertificatePromise;
}


// call 
enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err)
    })