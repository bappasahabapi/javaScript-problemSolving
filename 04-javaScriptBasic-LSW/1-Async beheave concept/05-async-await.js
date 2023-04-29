
/* 
function hello(){
    return 'Hello Bappa';
}
async function hello1(){
    return 'Hello-1';
}

console.log(hello());
console.log(hello1());

 */

//todo: solve the callback hell==> using promise ==> and solve promise ==> using async await

const paymentSuccess = true;
// const paymentSuccess = false;
const marks = 80;


//--------------------- Promise Definition

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
     resolve("   Congrats!!! you got the certificate ");
    }, 2000);
  });

  return getCertificatePromise;
}


//  ----------------------- Promise call 

async function course(){

    try {
          await enroll();
    await progress();
    const message =  await getCertificate();


    console.log(message)
    } catch (error) {
        console.log(error)
    }
  
}

course();   

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(err){
//         console.log(err)
// })