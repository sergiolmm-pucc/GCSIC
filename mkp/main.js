// main.js
if (typeof document !== 'undefined') {
    // Obtendo referências para os elementos HTML
    const fixedExpensesInput = document.getElementById('fixed_expenses');
    const variableExpensesInput = document.getElementById('variable_expenses');
    const profitInput = document.getElementById('profit');
    const resultElement = document.getElementById('result');
    const calculateButton = document.querySelector('.calculate');
    const clearButton = document.querySelector('.clear');
  
    function calculate() {
      const fixedExpenses = parseFloat(fixedExpensesInput.value);
      const variableExpenses = parseFloat(variableExpensesInput.value);
      const profit = parseFloat(profitInput.value);
  
      if (!isNaN(fixedExpenses) && !isNaN(variableExpenses) && !isNaN(profit)) {
        const markup = calculateMarkup(fixedExpenses, variableExpenses, profit);
        update(markup);
      } else {
        const mensagem = new Comunicado('ERRO', 'Preencha todos os dados');
        alert(mensagem.get());
      }
    }
  
    function clearMarkup() {
      resultElement.textContent = '0';
    }
  
    function update(markup) {
      resultElement.textContent = markup;
    }
  
    function Comunicado(mensagem, descricao) {
      this.mensagem = mensagem;
      this.descricao = descricao;
  
      this.get = function () {
        return this.mensagem + ' - ' + this.descricao;
      };
    }
  
    calculateButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearMarkup);
  }
  