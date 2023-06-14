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
const clickButton = () => {
  let salarioBruto = Number(document.getElementById("txtsalario").value);
  let estado = document.getElementById("estado").value;
  let INSS = document.getElementById("tdINSS");
  let FGTS = document.getElementById("tdFGTS");
  let MFGTS = document.getElementById("tdMultaFGTS");
  let ACDTRABALHO = document.getElementById("tdAcidenteTrabalho");
  let DAE = document.getElementById("tdDAE");
  let SBruto = document.getElementById("tdSBruto");
  let Total = document.getElementById("tdTotal");
  let DecimoTerceiro = document.getElementById("tdDecimoTerceiro");
  let Ferias = document.getElementById("tdFerias");

  const custoTotal = calculoEmpregada(salarioBruto, estado);

  if (custoTotal == null) {

    SBruto.innerHTML = "0";
    INSS.innerHTML = "0";
    FGTS.innerHTML = "0";
    MFGTS.innerHTML = "0";
    ACDTRABALHO.innerHTML = "0";
    DAE.innerHTML = "0";
    Total.innerHTML = "0";
    DecimoTerceiro.innerHTML = "0";
    Ferias.innerHTML = "0";
    
    window.alert("Valor a baixo do salário minimo!");
  } else {
    let inss = calculoInss(salarioBruto);
    let fgts = calculoFgts(salarioBruto);
    let mfgts = calculoMultaFgts(salarioBruto);
    let acidente = calculoAcidente(salarioBruto);
    let decimoTerceiro = calculoDecimoTerceiro(salarioBruto);
    let ferias = calculoFerias(salarioBruto);
    let dae = inss + fgts + mfgts + acidente + decimoTerceiro + ferias;

    SBruto.innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
    INSS.innerHTML = `R$ ${inss.toFixed(2)}`;
    FGTS.innerHTML = `R$ ${fgts.toFixed(2)}`;
    MFGTS.innerHTML = `R$ ${mfgts.toFixed(2)}`;
    ACDTRABALHO.innerHTML = `R$ ${acidente.toFixed(2)}`;
    DAE.innerHTML = `R$ ${dae.toFixed(2)}`;
    Total.innerHTML = `R$ ${custoTotal.toFixed(2)}`;
    DecimoTerceiro.innerHTML = `R$ ${decimoTerceiro.toFixed(2)}`;
    Ferias.innerHTML = `R$ ${ferias.toFixed(2)}`;
  }
};

module.exports = calculoEmpregada;