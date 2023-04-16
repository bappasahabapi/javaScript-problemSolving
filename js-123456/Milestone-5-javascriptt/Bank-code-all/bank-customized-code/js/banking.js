function getInputBalance(inputId) {
    const inputBalance = parseFloat(document.getElementById(inputId).value);  // get balance from the input fields
    document.getElementById(inputId).value = '';
    return inputBalance;
}
function updateBalance(inputId, inputBalance) {
    const pastBalance = parseFloat(document.getElementById(inputId).innerText); //showing  value on the screen
    return (document.getElementById(inputId).innerText = inputBalance + pastBalance);
}
document
    .getElementById('deposit-button')
    .addEventListener('click', function () {
        const depositInputBalance = getInputBalance('deposit-input');
        updateBalance('deposit-total', depositInputBalance); // update deposit
        updateBalance('balance-total', depositInputBalance);  // update total balance
    });
document
    .getElementById('withdraw-button')
    .addEventListener('click', function () {
        const withdrawInputBalance = getInputBalance('withdraw-input');
        updateBalance('withdraw-total', withdrawInputBalance);   // update withdraw
        updateBalance('balance-total', -withdrawInputBalance);  // update total balance
    });