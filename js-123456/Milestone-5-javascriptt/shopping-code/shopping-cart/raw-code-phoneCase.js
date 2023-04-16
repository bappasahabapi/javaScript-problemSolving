
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
        caseInput.value = parseInt(caseNumber) - 1;
    }
    // update case total 
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 60;


}


// add click hander for the case-plus button
document
    .getElementById('case-plus')
    .addEventListener('click', function () {
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1;
    });

// add click hander for the case-plus button
document
    .getElementById('case-minus')
    .addEventListener('click', function () {
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) - 1;
    });