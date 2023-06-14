// -- MKP -- 
// Função para calcular o Markup
function calculateMarkup(fixedExpenses, variableExpenses, profit) {

  let markup = 1
  // Realizando o cálculo do Markup
  let divisor = ((fixedExpenses / 100) + (variableExpenses / 100) + (profit / 100))
  if(divisor == 1){
    markup = 0
    alert("MarkUp não possível de ser cáculado.")
    return markup.toFixed(2)
  }
   markup = 1 / (1 -divisor);
  
  if( markup <= 0){
    markup = -1
  }

  return markup.toFixed(2);
}

function clearMarkup() {
    return '0'
}


module.exports = {
  calculateMarkup,
  clearMarkup,
};

