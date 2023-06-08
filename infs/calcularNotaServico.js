function calcularImpostos() {
  const valorServicoInput = document.getElementById('valor-servico');
  const valorServicoRaw = valorServicoInput.inputmask.unmaskedvalue(); // Get the raw unmasked value
  const valorServicoString = String(valorServicoRaw); // Convert to string
  const valorServico = parseFloat(valorServicoString.replace(',', '.')); // Remove the group separator and replace the radix point

  if(!isValidValor(valorServico)){
    return;
  }

  const faixaFaturamento = parseInt(document.getElementById('faixa-faturamento').value);

  const aliquotaPIS = calcularAliquotaPIS(regimePIS);
  const aliquotaCOFINS = calcularAliquotaCOFINS(regimeCOFINS);
  const aliquotaCSLL = calcularAliquotaCSLL(tipoEmpresa, faixaFaturamento);
  const aliquotaISS = 0.05; // Alíquota fixa de 5% para ISS
  const aliquotaIRPJ = 0.15; // Alíquota fixa de 15% para IRPJ

  const valorPIS = valorServico * aliquotaPIS;
  const valorCOFINS = valorServico * aliquotaCOFINS;
  const valorCSLL = valorServico * aliquotaCSLL;
  const valorISS = valorServico * aliquotaISS;
  const valorIRPJ = valorServico * aliquotaIRPJ;

  const totalImpostos = valorPIS + valorCOFINS + valorCSLL + valorISS + valorIRPJ;
  const valorTotal = valorServico + totalImpostos;

  document.getElementById('resultado-pis').textContent = `Valor do PIS: R$ ${valorPIS.toFixed(2)}`;
  document.getElementById('resultado-cofins').textContent = `Valor do COFINS: R$ ${valorCOFINS.toFixed(2)}`;
  document.getElementById('resultado-csll').textContent = `Valor do CSLL: R$ ${valorCSLL.toFixed(2)}`;
  document.getElementById('resultado-iss').textContent = `Valor do ISS: R$ ${valorISS.toFixed(2)}`;
  document.getElementById('resultado-irpj').textContent = `Valor do IRPJ: R$ ${valorIRPJ.toFixed(2)}`;
  document.getElementById('total-impostos').textContent = `Total de Impostos: R$ ${totalImpostos.toFixed(2)}`;
  document.getElementById('valor-total').textContent = `Valor Total (Serviço + Impostos): R$ ${valorTotal.toFixed(2)}`;
}

function calcularAliquotaPIS(regimePIS) {
  if (regimePIS === 'cumulativo') {
    return 0.0065; // Alíquota para regime cumulativo do PIS
  } else{
    return 0.0165; // Alíquota para regime não cumulativo do PIS
  }
}

function calcularAliquotaCOFINS(regimeCOFINS) {
  if (regimeCOFINS === 'cumulativo') {
    return 0.03; // Alíquota para regime cumulativo do COFINS
  } else{
    return 0.076; // Alíquota para regime não cumulativo do COFINS
  }
}

function calcularAliquotaCSLL(tipoEmpresa, faixaFaturamento) {
  switch (tipoEmpresa) {
    case 'microempresa':
      switch (true) {
        case (faixaFaturamento <= 180000):
          return 0.0275; // Alíquota para faixa de faturamento até R$ 180.000
        case (faixaFaturamento <= 360000):
          return 0.0305; // Alíquota para faixa de faturamento R$ 180.000 - R$ 360.000
        case (faixaFaturamento <= 720000):
          return 0.0340; // Alíquota para faixa de faturamento R$ 360.000 - R$ 720.000
        case (faixaFaturamento <= 1800000):
          return 0.0420; // Alíquota para faixa de faturamento R$ 720.000 - R$ 1.800.000
        case (faixaFaturamento <= 3600000):
          return 0.0525; // Alíquota para faixa de faturamento R$ 1.800.000 - R$ 3.600.000
        case (faixaFaturamento <= 4800000):
          return 0.06; // Alíquota para faixa de faturamento R$ 3.600.000 - R$ 4.800.000
        case (faixaFaturamento <= 6000000):
          return 0.0675; // Alíquota para faixa de faturamento R$ 4.800.000 - R$ 6.000.000
        case (faixaFaturamento <= 7200000):
          return 0.0725; // Alíquota para faixa de faturamento R$ 6.000.000 - R$ 7.200.000
        case (faixaFaturamento <= 8400000):
          return 0.08; // Alíquota para faixa de faturamento R$ 7.200.000 - R$ 8.400.000
        case (faixaFaturamento <= 9600000):
          return 0.0875; // Alíquota para faixa de faturamento R$ 8.400.000 - R$ 9.600.000
        case (faixaFaturamento <= 10800000):
          return 0.095; // Alíquota para faixa de faturamento R$ 9.600.000 - R$ 10.800.000
        case (faixaFaturamento <= 12000000):
          return 0.10; // Alíquota para faixa de faturamento R$ 10.800.000 - R$ 12.000.000
        case (faixaFaturamento <= 24000000):
          return 0.1125; // Alíquota para faixa de faturamento R$ 12.000.000 - R$ 24.000.000
        default:
          return 0.14; // Alíquota para faixa de faturamento acima de R$ 24.000.000
      }
    default:
      return 0.09; // Alíquota padrão para CSLL (empresas em geral)
  }
}

function isValidValor(valor){
  if(isNaN(valor)){
    return alert("Valor do Serviço deve ser númerico");
  }
}

module.exports = { calcularImpostos, calcularAliquotaCOFINS, calcularAliquotaCSLL, calcularAliquotaPIS };