function getInputValue(fieldId) {
    const inputValue = document.getElementById(fieldId);
    const inputValueText = inputValue.value;
    const inputAmount = parseFloat(inputValueText);
    inputValue.value = '';
    return inputAmount;
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function updateTotal(fieldId, amount) {
    const previousAmount = getInnerTextValue(fieldId);
    const totalAmount = previousAmount + amount;
    document.getElementById(fieldId).innerText = totalAmount;
}

function updateBalance(amount, isAdd) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;

    if (isAdd == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})