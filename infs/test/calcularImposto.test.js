const { calcularAliquotaCSLL } = require("../calculoNotaServico");

describe('Teste das funções de cálculo de impostos', () => {
  test('Teste do cálculo da alíquota de PIS', () => {
    expect(calcularAliquotaCSLL("microempresa", 180000)).toBe(0.0275);
  });

  /*test('Teste do cálculo da alíquota de COFINS', () => {
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
});
