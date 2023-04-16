function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;   // update hbe agei case number baray nilam
    // calculateTotal
    calculateTotal();

    // update  total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
};

// final calculation 

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1220;
    const caseTotal = getInputValue('case') * 60
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;

};
// handle case phone  increase decrease events
document
    .getElementById('phone-plus')
    .addEventListener('click', function () {
        updateProductNumber('phone', 1220, true);
    });
document
    .getElementById('phone-minus')
    .addEventListener('click', function () {
        updateProductNumber('phone', 1220, false);

    });


// handle case increase decrease events
document
    .getElementById('case-plus')
    .addEventListener('click', function () {
        updateProductNumber('case', 60, true);
    });

document
    .getElementById('case-minus')
    .addEventListener('click', function () {
        updateProductNumber('case', 60, false);
    });
