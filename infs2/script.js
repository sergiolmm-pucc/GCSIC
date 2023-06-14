function calcularImpostoSaoPaulo(precoServico) {
  const aliquota = 0.05;
  const imposto = precoServico * aliquota;
  return imposto;
}

function calcularImpostoCampinas(precoServico) {
  const aliquota = 0.025;
  const imposto = precoServico * aliquota;
  return imposto;
}

function calcularImpostos(empresa, valor, cidade) {
  let imposto;
  let taxa;

  if (cidade === 'sao_paulo') {
    imposto = calcularImpostoSaoPaulo(valor);
    taxa = 5;
  } else if (cidade === 'campinas') {
    imposto = calcularImpostoCampinas(valor);
    taxa = 2.5;
  }

  const total = valor + imposto;

  return { empresa, imposto, taxa, total };
}

document.getElementById("calcularBtn").addEventListener("click", (event) => {
  event.preventDefault();

  const empresa = document.getElementById("empresa").value;
  const valor = parseFloat(document.getElementById("preco").value);
  const cidade = document.getElementById("cidade").value;

  const { imposto, taxa, total } = calcularImpostos(empresa, valor, cidade);

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<p>Empresa: ${empresa}</p>
                                 <p>Imposto a pagar (${taxa}%): R$ ${imposto.toFixed(2)}</p>
                                 <p>Total: R$ ${total.toFixed(2)}</p>`;
});

module.exports = {
  calcularImpostoSaoPaulo,
  calcularImpostoCampinas,
  calcularImpostos
};
