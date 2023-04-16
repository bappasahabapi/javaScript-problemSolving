function updateProduct(product, price, isPlus) {
    const productInputField = document.getElementById(product + '-number');
    let productNumber = productInputField.value;
    if (isPlus == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInputField.value = productNumber; // ekhane ase input field  update hoi


    // updateCaseTotal
    const perProductPrice = document.getElementById(product + '-total');
    perProductPrice.innerText = productNumber * price;

    // total cost 
    totalCost();


};
function getProductQuantity(productQunatity) {
    const totalProductQuantity = parseInt(document.getElementById(productQunatity + '-number').value);
    return totalProductQuantity;
};
function totalCost() {
    const totalPhoneCost = getProductQuantity('phone') * 1220;
    const totalCaseCost = getProductQuantity('case') * 60;

    const subTotal = totalPhoneCost + totalCaseCost;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}

// handle phone 
document
    .getElementById('phone-plus')
    .addEventListener('click', function () {
        updateProduct('phone', 1220, true);
    });
document
    .getElementById('phone-minus')
    .addEventListener('click', function () {
        updateProduct('phone', 1220, false);
    });

// handle case 
document
    .getElementById('case-plus')
    .addEventListener('click', function () {
        updateProduct('case', 60, true);
    });
document
    .getElementById('case-minus')
    .addEventListener('click', function () {
        updateProduct('case', 60, false);
    });