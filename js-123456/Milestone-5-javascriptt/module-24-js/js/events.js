// Method-2

function makeRed() {
    document.body.style.backgroundColor = "red";
}
//     <!-- Method-3 handle bule button click by setting function name  -->

const blueButton = document.getElementById('make-blue-button');
// / here use just werite the name.
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// <!-- Method-4
//  handle green button click without  setting function name  -->
// anonumous function= which function has no name

const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// <!-- Method-5
// handle this by using addEventLisener
const goldenButton = document.getElementById('meke-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


// <!-- Method-6
// handle this by using addEventLisener
const hotPinkButton = document.getElementById('make-hotpink')
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})


// <!-- Method-7
//direct shortcut
document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})

