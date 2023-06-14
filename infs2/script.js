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

module.exports = {
  calcularImpostoSaoPaulo,
  calcularImpostoCampinas,
  calcularImpostos,
};
