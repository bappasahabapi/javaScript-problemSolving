
// // handle case phone  increase decrease events


function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;   // update hbe agei case number baray nilam

    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}


// handle case phone  increase decrease events

document
    .getElementById('phone-plus')
    .addEventListener('click', function () {
        updateProductNumber('phone', true);
    });
document
    .getElementById('phone-minus')
    .addEventListener('click', 1220, function () {
        updateProductNumber('phone', 1220, false);

    });














// document
//     .getElementById('phone-plus')
//     .addEventListener('click', function () {
//         console.log('plus is workig');

//     });
// document
//     .getElementById('phone-minus')
//     .addEventListener('click', function () {
//         console.log('minus is workig');

//     });