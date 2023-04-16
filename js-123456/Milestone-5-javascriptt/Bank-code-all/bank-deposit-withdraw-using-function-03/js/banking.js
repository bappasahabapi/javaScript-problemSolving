//  input field for deposit and withdraw
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;
}
// update field
function updadteTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalace(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document
    .getElementById('deposit-button')
    .addEventListener('click', function () {
        const newDepositAmount = getInputValue('deposit-input');
        updadteTotalField('deposit-total', newDepositAmount);
        updateBalace(newDepositAmount, true);
    });

document
    .getElementById('withdraw-button')
    .addEventListener('click', function () {
        const newWithdrawAmount = getInputValue('withdraw-input');
        updadteTotalField('withdraw-total', newWithdrawAmount);
        updateBalace(newWithdrawAmount, false);
    })