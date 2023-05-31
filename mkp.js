// -- MKP -- 

// Obtendo referências para os elementos HTML
const fixedExpensesInput = document.getElementById('fixed_expenses');
const variableExpensesInput = document.getElementById('variable_expenses');
const profitInput = document.getElementById('profit');
const resultElement = document.getElementById('result');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.clear');

// Função para calcular o Markup e exibir o resultado
function calculateMarkup() {

  // Obtendo os valores dos inputs
  const fixedExpenses = parseFloat(fixedExpensesInput.value);
  const variableExpenses = parseFloat(variableExpensesInput.value);
  const profit = parseFloat(profitInput.value);

  // Realizando o cálculo do Markup
  const markup = 1 / (1 - (fixedExpenses / 100) - (variableExpenses / 100) - (profit / 100));

  // Atualizando o elemento de resultado
  resultElement.textContent = markup.toFixed(2);
}

function clearMarkup() {
    resultElement.textContent = '0'
}

calculateButton.addEventListener('click', calculateMarkup);
clearButton.addEventListener('click', clearMarkup);