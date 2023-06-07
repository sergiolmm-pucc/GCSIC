const calculoEmpregada = require('../testes/script');

describe('calculoEmpregada', () => {
  test('Deve calcular corretamente os encargos trabalhistas', () => {
    const salarioBruto = 1500;
    const country = 'sao_paulo';

    const resultado = calculoEmpregada(salarioBruto, country);

    expect(resultado.salarioBruto).toBe("R$ 1500.00");
    expect(resultado.INSS).toBe("R$ 120.00");
    expect(resultado.FGTS).toBe("R$ 120.00");
    expect(resultado.MFGTS).toBe("R$ 48.00");
    expect(resultado.ACDTRABALHO).toBe("R$ 12.00");
    expect(resultado.DAE).toBe("R$ 300.00");
    expect(resultado.SBruto).toBe("R$ 1500.00");
    expect(resultado.Total).toBe("R$ 1846.67");
  });
  test('Deve calcular corretamente os encargos trabalhistas', () => {
    const salarioBruto = 1800;
    const country = 'parana';

    const resultado = calculoEmpregada(salarioBruto, country);

    expect(resultado.salarioBruto).toBe("R$ 1800.00");
    expect(resultado.INSS).toBe("R$ 144.00");
    expect(resultado.FGTS).toBe("R$ 144.00");
    expect(resultado.MFGTS).toBe("R$ 57.60");
    expect(resultado.ACDTRABALHO).toBe("R$ 14.40");
    expect(resultado.DAE).toBe("R$ 360.00");
    expect(resultado.SBruto).toBe("R$ 1800.00");
    expect(resultado.Total).toBe("R$ 2216.00");
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
