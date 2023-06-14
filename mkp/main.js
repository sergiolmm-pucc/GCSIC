// main.js
if (typeof document !== 'undefined') {
    // Obtendo referências para os elementos HTML
    const fixedExpensesInput = document.getElementById('fixed_expenses');
    const variableExpensesInput = document.getElementById('variable_expenses');
    const profitInput = document.getElementById('profit');
    const resultElement = document.getElementById('result');
    const calculateButton = document.querySelector('.calculate');
    const clearButton = document.querySelector('.clear');
    const icone1 = document.getElementById('icone1');
  
    function calculate() {
      const fixedExpenses = parseFloat(fixedExpensesInput.value);
      const variableExpenses = parseFloat(variableExpensesInput.value);
      const profit = parseFloat(profitInput.value);
  
      if (!isNaN(fixedExpenses) && !isNaN(variableExpenses) && !isNaN(profit)) {
        const markup = calculateMarkup(fixedExpenses, variableExpenses, profit);
        if(markup == -1){
          clearMarkup()
          const mensagem = new Comunicado('ERRO -', 'O MarkUp desejado não é possível de ser alcançado');
          alert(mensagem.get());
        }else{
          update(markup);
        }
        
      } else {
        const mensagem = new Comunicado('ERRO -', 'Preencha todos os dados');
        alert(mensagem.get());
      }
    }
  
    function clearMarkup() {
      resultElement.textContent = '0';
      fixedExpensesInput.value = '';
      variableExpensesInput.value = '';
      profitInput.value = '';
    }
  
    function update(markup) {
      resultElement.textContent = markup;
    }
  
    function Comunicado(mensagem, descricao) {
      this.mensagem = mensagem;
      this.descricao = descricao;
  
      this.get = function () {
        return this.mensagem + '  ' + this.descricao;
      };
    }

    function info(){
      const mensagem = new Comunicado('O nosso MarkUp é calculado como ',': 1 / 1 - ((Despesas Fixas / 100) + (Despesas Variáveis / 100) + (Lucro Desejado / 100))')
      alert(mensagem.get())
    }
  
    calculateButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearMarkup);
    icone1.addEventListener('click',info)
  }
  