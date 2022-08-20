

function inputAmount(inputField) {
    const currentValue = document.getElementById(inputField);
    const currentValueString = currentValue.value;
    const currentValueNumber = parseFloat(currentValueString);
    return currentValueNumber;
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    let newIncomeAmount = inputAmount('income-field');
    const foodExpenses = inputAmount('food-field');
    const rentExpenses = inputAmount('rent-field');
    const othersExpenses = inputAmount('others-field');

    const totalExpenses = foodExpenses + rentExpenses + othersExpenses;
    const totalBalance = newIncomeAmount - totalExpenses;

    //    show the value on the screen 
    // show the expenses vlaue
    const previousExpensesAmount = document.getElementById('expenses-field');
    const previousExpensesAmountString = previousExpensesAmount.innerText;
    const previousExpensesAmountNumber = parseFloat(previousExpensesAmountString);

    previousExpensesAmount.innerText = totalExpenses;
    // show the main balance you have
    let previousBalance = document.getElementById('balance-field');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceString);

    previousBalance.innerText = totalBalance;
})
// saving amount 
document.getElementById('save-btn').addEventListener('click', function () {
    const percentAmount = inputAmount('save-field');
    const percentage = percentAmount / 100;
    let incomeAmount = inputAmount('income-field');
    const percentageAdded = percentage * incomeAmount;


    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = percentageAdded;

    // remaining balance
    let balanceIn = document.getElementById('balance-field');
    const balanceInString = balanceIn.innerText;
    const balanceInNumber = parseFloat(balanceInString);

    const remainingAmount = balanceInNumber - percentageAdded;


    const remainingField = document.getElementById('remaining-balance-field');
    remainingField.innerText = remainingAmount;


})