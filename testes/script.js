const calculoEmpregada = (salarioBrutoValue, countryValue) => {
    let salarioBruto = parseFloat(salarioBrutoValue);
    let INSS = 0;
    let FGTS = 0;
    let MFGTS = 0;
    let ACDTRABALHO = 0;
    let DAE = 0;
    let SBruto = salarioBruto;
    let Total = 0;
  
    // Verifique os valores e calcule os encargos trabalhistas
    if (
      salarioBruto < 1320 ||
      (countryValue === 'sao_paulo' && salarioBruto < 1450) ||
      (countryValue === 'rio_de_janeiro' && salarioBruto < 1427) ||
      (countryValue === 'rio_grande_do_sul' && salarioBruto < 1510) ||
      (countryValue === 'parana' && salarioBruto < 1731.02) ||
      (countryValue === 'santa_catarina' && salarioBruto < 1521)
    ) {
      throw new Error('Valor abaixo do salário mínimo!');
    } else {
      // Faça os cálculos com o salarioBruto
      let impostoINSS = salarioBruto * 0.08;
      let impostoFGTS = salarioBruto * 0.08;
      let multaFGTS = salarioBruto * 0.032;
      let acidenteTrabalho = salarioBruto * 0.008;
      let decimoTerceiro = salarioBruto / 12;
      let ferias = decimoTerceiro / 3;
      let valorDAE = acidenteTrabalho + impostoFGTS + multaFGTS + impostoINSS;
  
      Total =
        salarioBruto +
        impostoINSS +
        multaFGTS +
        acidenteTrabalho +
        decimoTerceiro +
        ferias;
  
      INSS = impostoINSS.toFixed(2);
      FGTS = impostoFGTS.toFixed(2);
      MFGTS = multaFGTS.toFixed(2);
      ACDTRABALHO = acidenteTrabalho.toFixed(2);
      DAE = valorDAE.toFixed(2);
    }
  
    return {
      salarioBruto: `R$ ${salarioBruto.toFixed(2)}`,
      INSS: `R$ ${INSS}`,
      FGTS: `R$ ${FGTS}`,
      MFGTS: `R$ ${MFGTS}`,
      ACDTRABALHO: `R$ ${ACDTRABALHO}`,
      DAE: `R$ ${DAE}`,
      SBruto: `R$ ${SBruto.toFixed(2)}`,
      Total: `R$ ${Total.toFixed(2)}`,
    };
  };
  
  module.exports = calculoEmpregada;