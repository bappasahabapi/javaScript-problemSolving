
// Withdraw
// handle Withdram button event
document
    .getElementById('withdraw-button')
    .addEventListener('click', function () {
        // get/ capture  the amount deposited
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountText);

        // set  withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmountText = withdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

        withdrawTotal.innerText = newWithdrawTotal;
        withdrawInput.value = '';

        // update balance for withdraw
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalaaceTotal = previousBalanceTotal - newWithdrawAmount;

        balanceTotal.innerText = newBalaaceTotal;
    })