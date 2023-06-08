// -- MKP -- 
// Função para calcular o Markup
function calculateMarkup(fixedExpenses, variableExpenses, profit) {

  // Realizando o cálculo do Markup
  const markup = 1 / (1 - (fixedExpenses / 100) - (variableExpenses / 100) - (profit / 100));

  return markup.toFixed(2);
}

function clearMarkup() {
    return '0'
}


module.exports = {
  calculateMarkup,
  clearMarkup,
};

