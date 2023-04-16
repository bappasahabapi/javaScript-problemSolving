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
    })