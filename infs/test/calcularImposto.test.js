const { calcularAliquotaCSLL, calcularAliquotaCOFINS, calcularAliquotaPIS, calcularImpostos } = require("../calculoNotaServico");

describe('Teste das funções de cálculo de impostos - Microempresa até 180k', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 180000)).toBe(0.0275);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 180k a 360k', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 360000)).toBe(0.0305);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 360k a 720k', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 720000)).toBe(0.0340);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 720k a 1.8M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 1800000)).toBe(0.0420);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 1.8M a 3.6M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 3600000)).toBe(0.0525);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 3.6Mk a 4.8M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 4800000)).toBe(0.06);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 4.8M a 6M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 6000000)).toBe(0.0675);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 6M a 7.2M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 7200000)).toBe(0.0725);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 7.2M a 8.4M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 8400000)).toBe(0.08);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 8.4M a 9.6M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 9600000)).toBe(0.0875);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 9.6M a 10.8M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 10800000)).toBe(0.095);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 10.8M a 12M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 12000000)).toBe(0.1);
  });
});

describe('Teste das funções de cálculo de impostos - Microempresa de 12M a 24M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 24000000)).toBe(0.1125);
  });
});

describe('Teste das funções de cálculo de impostos- Microempresa a partir de 24M', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("microempresa", 30000000)).toBe(0.14);
  });
});

describe('Teste das funções de cálculo de impostos - Outros tipos de Empresa', () => {
  test('Teste do cálculo da alíquota de CSLL', () => {
    expect(calcularAliquotaCSLL("segurança", 100000)).toBe(0.09);
  });
});

describe('Teste das funções de cálculo de impostos - PIS Cumulativo', () => {
  test('Teste do cálculo da alíquota de PIS', () => {
    expect(calcularAliquotaPIS("cumulativo")).toBe(0.0065);
  });
});

describe('Teste das funções de cálculo de impostos - PIS NÃO Cumulativo', () => {
  test('Teste do cálculo da alíquota de PIS', () => {
    expect(calcularAliquotaPIS("nao-cumulativo")).toBe(0.0165);
  });
});

describe('Teste das funções de cálculo de impostos - COFINS Cumulativo', () => {
  test('Teste do cálculo da alíquota de COFINS', () => {
    expect(calcularAliquotaCOFINS("cumulativo")).toBe(0.03);
  });
});

describe('Teste das funções de cálculo de impostos - COFINS NÃO Cumulativo', () => {
  test('Teste do cálculo da alíquota de COFINS', () => {
    expect(calcularAliquotaCOFINS("nao-cumulativo")).toBe(0.076);
  });
});


/*
describe("Teste função principal - Calcular Impostos", () => {

  // Mock das funções auxiliares
  const valorServico = 1000;
  const faixaFaturamento = 500000; 
  const isValidValorMock = jest.fn().mockReturnValue(true);
  const calcularAliquotaPISMock = jest.fn().mockReturnValue(0.065);
  const calcularAliquotaCOFINSMock = jest.fn().mockReturnValue(0.249);
  const calcularAliquotaCSLLMock = jest.fn().mockReturnValue(0.218);
  const isValidEmpresaMock = jest.fn().mockReturnValue(true);

  test('calcularImpostos deve calcular corretamente os impostos com valores específicos', () => {
    // Definindo valores esperados
    const valorPISExpected = 65.00;
    const valorCOFINSExpected = 249.00;
    const valorCSLLExpected = 1090.00;
    const valorISSExpected = 50.00;
    const valorIRPJExpected = 150.00;
    const totalImpostosExpected = 1604.00;
    const valorTotalExpected = 2604.00;

    // Chamando a função calcularImpostos
    calcularImpostos();

    // Verificando se os valores esperados foram atualizados corretamente nos elementos do DOM
    expect(document.getElementById('resultado-pis').textContent).toBe(`Valor do PIS: R$ ${valorPISExpected.toFixed(2)}`);
    expect(document.getElementById('resultado-cofins').textContent).toBe(`Valor do COFINS: R$ ${valorCOFINSExpected.toFixed(2)}`);
    expect(document.getElementById('resultado-csll').textContent).toBe(`Valor do CSLL: R$ ${valorCSLLExpected.toFixed(2)}`);
    expect(document.getElementById('resultado-iss').textContent).toBe(`Valor do ISS: R$ ${valorISSExpected.toFixed(2)}`);
    expect(document.getElementById('resultado-irpj').textContent).toBe(`Valor do IRPJ: R$ ${valorIRPJExpected.toFixed(2)}`);
    expect(document.getElementById('total-impostos').textContent).toBe(`Total de Impostos: R$ ${totalImpostosExpected.toFixed(2)}`);
    expect(document.getElementById('valor-total').textContent).toBe(`Valor Total (Serviço + Impostos): R$ ${valorTotalExpected.toFixed(2)}`);

    // Verificando se as funções auxiliares foram chamadas corretamente
    expect(isValidValorMock).toHaveBeenCalledWith(1000.00);
    expect(isValidEmpresaMock).toHaveBeenCalled();
    expect(calcularAliquotaPISMock).toHaveBeenCalled();
    expect(calcularAliquotaCOFINSMock).toHaveBeenCalled();
    expect(calcularAliquotaCSLLMock).toHaveBeenCalled();
  });
});


describe("Teste das funções de cálculo de impostos - Calcular Impostos", () => {
  test("Teste dos cálcilos dos impostos Totais", () => {
    const impostos = calcularImpostos(1000, false, 0);
    expect(calcularAliquotaPIS).toBe(6.5);
    expect(impostos.cofins).toBe(30);
    expect(impostos.csll).toBe(9);
    expect(impostos.iss).toBe(50);
    expect(impostos.irpj).toBe(150);
    expect(impostos.totalImpostos).toBe(235.5);
    expect(impostos.valorTotal).toBe(1235.5);
  });
});

  test('Teste do cálculo da alíquota de COFINS', () => {
    expect(calcularAliquotaCOFINS(1000)).toBe(0.03);
  });

  test('Teste do cálculo da alíquota de CSLL para microempresas optantes pelo Simples Nacional', () => {
    expect(calcularAliquotaCSLL(180000)).toBe(0.09);
    expect(calcularAliquotaCSLL(3600000)).toBe(0.1125);
  });

  test('Teste do cálculo da alíquota de CSLL para empresas em geral', () => {
    expect(calcularAliquotaCSLL(1000000000)).toBe(0.09);
  });

  test('Teste do cálculo da alíquota de ISS', () => {
    expect(calcularAliquotaISS(1000)).toBe(0.05);
  });

  test('Teste do cálculo da alíquota de IRPJ', () => {
    expect(calcularAliquotaIRPJ(1000)).toBe(0.15);
  });

  test('Teste do cálculo dos impostos', () => {
    const impostos = calcularImpostos(1000, 'microempresa', false, 'default', 0);
    expect(impostos.pis).toBe(6.5);
    expect(impostos.cofins).toBe(30);
    expect(impostos.csll).toBe(9);
    expect(impostos.iss).toBe(50);
    expect(impostos.irpj).toBe(150);
    expect(impostos.totalImpostos).toBe(235.5);
    expect(impostos.valorTotal).toBe(1235.5);
  }); */
