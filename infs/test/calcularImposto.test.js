const { calcularAliquotaCSLL, calcularAliquotaCOFINS, calcularAliquotaPIS, calcularImpostos } = require("../calcularNotaServico.js");

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


describe("Teste função principal - Calcular Impostos", () => {

  // Mock das funções auxiliares
  const valorServico = 100000;
  const faixaFaturamento = 360000; 
  const calcularAliquotaPISMock = "cumulativo";
  const calcularAliquotaCOFINSMock = "cumulativo";
  const tipoEmpresaMock = "microempresa";

  test('calcularImpostos deve calcular corretamente os impostos com valores específicos', async () => {
    // Definindo valores esperados
    const valorPISExpected = 0.0065;
    const valorCOFINSExpected = 0.03;
    const valorCSLLExpectedMicro = 0.0305;
    const valorCSLLExpectedServico = 0.09;
    const totalImpostosExpected = 26700.00;
    const valorTotalExpected = 126700.00;

    // Chamando a função calcularImpostos
    const resultados = await calcularImpostos(valorServico, calcularAliquotaPISMock, calcularAliquotaCOFINSMock, tipoEmpresaMock, faixaFaturamento);

    console.log(resultados);

    // Verificando se os valores esperados foram atualizados corretamente nos elementos do DOM
    expect(calcularAliquotaPIS("cumulativo")).toBe(parseFloat(valorPISExpected.toFixed(4)));
    expect(calcularAliquotaCOFINS("cumulativo")).toBe(parseFloat(valorCOFINSExpected.toFixed(2)));
    expect(calcularAliquotaCSLL("microempresa", faixaFaturamento)).toBe(parseFloat(valorCSLLExpectedMicro.toFixed(4)));
    expect(calcularAliquotaCSLL("servico", faixaFaturamento)).toBe(parseFloat(valorCSLLExpectedServico.toFixed(2)));
    expect(resultados.totalImpostos).toBe(totalImpostosExpected.toFixed(2));
    expect(resultados.valorTotal).toBe(valorTotalExpected.toFixed(2));
  });
});