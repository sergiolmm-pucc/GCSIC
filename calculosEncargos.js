
function calcularEncargos(salarioBruto) {
    var inssEmpregado = salarioBruto * 0.0801;
    var inssEmpregador = salarioBruto * 0.08;
    var fgts = salarioBruto * 0.08;
    var depositoCompulsorio = salarioBruto * 0.032;
    var seguroAcidenteTrabalho = salarioBruto * 0.008;
  
    var custoEmpregador =
      inssEmpregado +
      inssEmpregador +
      fgts +
      depositoCompulsorio +
      seguroAcidenteTrabalho;
  
    return {
      total: "R$ " + custoEmpregador.toFixed(2),
      inssEmpregado: "R$ " + inssEmpregado.toFixed(2),
      inssEmpregador: "R$ " + inssEmpregador.toFixed(2),
      fgts: "R$ " + fgts.toFixed(2),
      multaFGTS: "R$ " + depositoCompulsorio.toFixed(2),
      seguroAcidenteTrabalho: "R$ " + seguroAcidenteTrabalho.toFixed(2)
    };
  }
  
  function verificarSalarioMinimo(salarioBruto, estado) {
    var salarioMinimo = obtersalarioMinimo(estado);
  
    if (salarioBruto < salarioMinimo) {
      return false;
    }
  
    return true;
  }
  
  function obtersalarioMinimo(estado) {
    var salarioMinimo = 0;
  
    switch (estado) {
      case "AC":
      case "AL":
      case "AP":
      case "AM":
      case "BA":
      case "CE":
      case "DF":
      case "ES":
      case "GO":
      case "MA":
      case "MT":
      case "MS":
      case "MG":
      case "PA":
      case "PB":
      case "PE":
      case "PI":
      case "RN":
      case "RO":
      case "RR":
      case "SE":
      case "TO":
        salarioMinimo = 1320.0;
        break;
      case "PR":
        salarioMinimo = 1871.74;
        break;
      case "RS":
        salarioMinimo = 1443.94;
        break;
      case "SC":
        salarioMinimo = 1521.0;
        break;
      case "SP":
        salarioMinimo = 1476.75;
        break;
      default:
        salarioMinimo = 1320.20;
        break;
    }
    return salarioMinimo;
  }
  
  module.exports = { calcularEncargos, verificarSalarioMinimo, obtersalarioMinimo };
  
