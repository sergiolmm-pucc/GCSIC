const { calcularImpostoSaoPaulo, calcularImpostoCampinas, calcularImpostos } = require('./script.js');

describe('calcularImpostoSaoPaulo', () => {
  test('Deve calcular corretamente o imposto para São Paulo', () => {
    const precoServico = 100;
    const resultado = calcularImpostoSaoPaulo(precoServico);
    expect(resultado).toBe(5); 
  });
});

describe('calcularImpostoCampinas', () => {
  test('Deve calcular corretamente o imposto para Campinas', () => {
    const precoServico = 100;
    const resultado = calcularImpostoCampinas(precoServico);
    expect(resultado).toBe(2.5); 
  });
});

describe('calcularImpostos', () => {
  test('Deve calcular corretamente os impostos para São Paulo', () => {
    const empresa = 'ACME';
    const valor = 100;
    const cidade = 'sao_paulo';
    const resultado = calcularImpostos(empresa, valor, cidade);
    expect(resultado.empresa).toBe('ACME');
    expect(resultado.imposto).toBe(5); 
    expect(resultado.taxa).toBe(5);
    expect(resultado.total).toBe(105); 
  });

  test('Deve calcular corretamente os impostos para Campinas', () => {
    const empresa = 'ACME';
    const valor = 100;
    const cidade = 'campinas';
    const resultado = calcularImpostos(empresa, valor, cidade);
    expect(resultado.empresa).toBe('ACME');
    expect(resultado.imposto).toBe(2.5); 
    expect(resultado.taxa).toBe(2.5);
    expect(resultado.total).toBe(102.5);
  });
});
