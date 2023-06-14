const calculoEmpregada = require('../script.js');


describe('calculoEmpregada', () => {
  test('Deve calcular corretamente os encargos trabalhistas', () => {
    const salarioBruto = 1500;
    const country = 'sao_paulo';

    const resultado = calculoEmpregada(salarioBruto, country);

    expect(resultado.salarioBruto).toBe(1500.00);
    expect(resultado.INSS).toBe(120.00);
    expect(resultado.FGTS).toBe(120.00);
    expect(resultado.MFGTS).toBe(48.00);
    expect(resultado.ACDTRABALHO).toBe(12.00);
    expect(resultado.DAE).toBe(300.00);
    expect(resultado.Total).toBe(1846.67);
  });
  test('Deve calcular corretamente os encargos trabalhistas', () => {
    const salarioBruto = 1800;
    const country = 'parana';

    const resultado = calculoEmpregada(salarioBruto, country);

    expect(resultado.salarioBruto).toBe(1800.00);
    expect(resultado.INSS).toBe(144.00);
    expect(resultado.FGTS).toBe(144.00);
    expect(resultado.MFGTS).toBe(57.60);
    expect(resultado.ACDTRABALHO).toBe(14.40);
    expect(resultado.DAE).toBe(360.00);
    expect(resultado.Total).toBe(2216.00);
  });

  test('Deve lançar um erro para valor abaixo do salário mínimo', () => {
    const salarioBruto = 1000;
    const country = 'sao_paulo';

    expect(() => calculoEmpregada(salarioBruto, country)).toThrowError('Valor abaixo do salário mínimo!');
  });

  test('Deve lançar um erro para valor abaixo do salário mínimo', () => {
    const salarioBruto = 1000;
    const country = 'parana';

    expect(() => calculoEmpregada(salarioBruto, country)).toThrowError('Valor abaixo do salário mínimo!');
  });
});
