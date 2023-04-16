// Deposite
// handle deposit button event
document
    .getElementById('deposit-button')
    .addEventListener('click', function () {
        // get/ capture  the amount deposited
        const depositInput = document.getElementById('deposit-input');
        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);


        // update deposit section
        const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmountText = depositTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositAmountText);
        const newDepositTotal = previousDepositAmount + newDepositAmount;

        //update balance 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);

        const newBalaaceTotal = previousBalanceTotal + newDepositTotal;
        balanceTotal.innerText = newBalaaceTotal;

        depositTotal.innerText = newDepositTotal;
        depositInput.value = '';


    });

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