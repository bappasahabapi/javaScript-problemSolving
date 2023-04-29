//todo: 83-callback pattern

//todo: example-1

/* const paymentSuccess1 =true;
const marks =80;
const finish =true;
//first
function enrol(callback){
    console.log('setp-1 Course enrollment is in progress');

    setTimeout(function(){
        if(paymentSuccess1){
            callback();
        }else{
            console.log('Payment failed')
        }
    },3000)

}

//second
function progress(callback){
    console.log('setp-2 Course on progress');

    setTimeout(function(){
        if(marks>=80){
            callback();
        }else{
            console.log('you could not get the enough marks to get the certificate');
        }
    },4000)
}

//third
function getCertificate(callback){
    console.log('setp-3 preparing your certificate');
    setTimeout(() => {
        if(finish){
            callback()
        }
        else{
            console.log('please finishd the procedure first');
        }

    }, 2000);
}

//fourth
function finised1(){
    console.log('setp-4 Congrats!!! you got the certificated');
    setTimeout(() => {
        console.log('Thanks for the course')
    }, 2000);
}


// enrol(progress) //not working properly

enrol(function(){
    // progress(getCertificate);
    progress(function(){
        getCertificate(finised1);
    })
}) */




//todo: example-2
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
function finished() {
    console.log('setp-6 Congrats!!! you got the certificated');
    setTimeout(() => {
        console.log('   Thanks for the course')
    }, 2000);
}

// calling
login(function () {
    payment(function () {
        enrol(function () {
            courseProgress(function () {
                getCertificate(finished);
            })
        })
    })
})


// this calling is called callback hell
