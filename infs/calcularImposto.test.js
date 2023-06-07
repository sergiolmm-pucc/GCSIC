const {
  calcImpostoNotaServico
} = require('./main');

describe('Teste das funções de cálculo de impostos', () => {
  test('Teste do cálculo da alíquota de PIS', () => {
    expect(() => calcImpostoNotaServico("calcularAliquotaCSLL", "microempresa", 180000)).toBe(0.0275);
  });
});
