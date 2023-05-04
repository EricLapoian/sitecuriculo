let balance = 0;
let incomeList = [];
let expenseList = [];
function updateBalance() {
  const balanceElement = document.getElementById('balance-value');
  balanceElement.innerText = `R$ ${balance.toFixed(2)}`;
}
function addIncome() {
  const description = document.getElementById('income-description').value;
  const value = parseFloat(document.getElementById('income-value').value);
  incomeList.push({ description, value });
  updateSummary();
}
function addExpense() {
  const description = document.getElementById('expense-description').value;
  const value = parseFloat(document.getElementById('expense-value').value);
  expenseList.push({ description, value });
  updateSummary();
}
function updateSummary() {
  const incomeListElement = document.getElementById('income-list');
  const expenseListElement = document.getElementById('expense-list');
  incomeListElement.innerHTML = '';
  expenseListElement.innerHTML = '';
  for (let income of incomeList) {
    const listItem = document.createElement('li');
    listItem.innerText = `${income.description}: R$ ${income.value.toFixed(2)}`;
    incomeListElement.appendChild(listItem);
  }
  for (let expense of expenseList) {
    const listItem = document.createElement('li');
    listItem.innerText = `${expense.description}: R$ ${expense.value.toFixed(2)}`;
    expenseListElement.appendChild(listItem);
  }
  const incomeTotal = incomeList.reduce((total, income) => total + income.value, 0);
  const expenseTotal = expenseList.reduce((total, expense) => total + expense.value, 0);
  balance = incomeTotal - expenseTotal;
  updateBalance();
}
function setInitialBalance() {
  const initialBalance = parseFloat(document.getElementById('initial-balance').value);
  balance = initialBalance;
  updateBalance();
}
window.onload = updateSummary;
