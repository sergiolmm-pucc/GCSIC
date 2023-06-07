const calculoEmpregada = () => {
  //Pegando dados da input
  let salarioBruto = document.getElementById("txtsalario");
  let country = document.getElementById("country");
  let INSS = document.getElementById("tdINSS");
  let FGTS = document.getElementById("tdFGTS");
  let MFGTS = document.getElementById("tdMultaFGTS");
  let ACDTRABALHO = document.getElementById("tdAcidenteTrabalho");
  let DAE = document.getElementById("tdDAE");
  let SBruto = document.getElementById("tdSBruto");
  let Total = document.getElementById("tdTotal");

  // São Paulo: R$ 1.550;
  // Rio de Janeiro: R$ 1.238,11 a R$ 3.158,96;
  // Paraná: R$ 1.731,02 a R$ 1.999,02 em 2023;
  // Santa Catarina: R$ 1.521 e R$ 1.740;
  // Rio Grande do Sul: R$ 1.305,56 a R$ 1.654,50.
  //   console.log(Number(salarioBruto.value))

  if (
    Number(salarioBruto.value) < 1320 ||
    (country.value == "sao_paulo" && Number(salarioBruto.value) < 1550) ||
    (country.value == "rio_de_janeiro" && Number(salarioBruto.value) < 1427) ||
    (country.value == "rio_grande_do_sul" &&
      Number(salarioBruto.value) < 1510) ||
    (country.value == "parana" && Number(salarioBruto.value) < 1731.02) ||
    (country.value == "santa_catarina" && Number(salarioBruto.value) < 1521)
  ) {
    window.alert("Valor a baixo do salário minimo!");
  } else {
    //Fazendo o calculo com o salarioBruto
    let impostoINSS = salarioBruto.value * 0.08;
    let impostoFGTS = salarioBruto.value * 0.08;
    let multaFGTS = salarioBruto.value * 0.032;
    let acidenteTrabalho = salarioBruto.value * 0.008;
    let decimoTerceiro = salarioBruto.value / 12;
    let ferias = decimoTerceiro / 3;
    let valorDAE = acidenteTrabalho + impostoFGTS + multaFGTS + impostoINSS;

    const salarioFinal =
      Number(salarioBruto.value) +
      Number(impostoINSS) +
      Number(multaFGTS) +
      Number(acidenteTrabalho) +
      Number(decimoTerceiro) +
      Number(ferias);

    SBruto.innerHTML = `R$ ${salarioBruto.value}`;
    INSS.innerHTML = `R$ ${impostoINSS}`;
    FGTS.innerHTML = `R$ ${impostoFGTS}`;
    MFGTS.innerHTML = `R$ ${multaFGTS}`;
    ACDTRABALHO.innerHTML = `R$ ${acidenteTrabalho}`;
    DAE.innerHTML = `R$ ${valorDAE.toFixed(2)}`;
    Total.innerHTML = `R$ ${salarioFinal.toFixed(2)}`;

    return salarioFinal;
  }
};
