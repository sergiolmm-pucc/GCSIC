const { calcularEncargos, verificarSalarioMinimo, obtersalarioMinimo } = require('../calcularEncargos.js');

test('Teste de cálculo de encargos', () => {
  const salarioBruto = 2000;
  const resultado = calcularEncargos(salarioBruto);

  expect(resultado.total).toBe('R$ 560.20');
  expect(resultado.inssEmpregado).toBe('R$ 160.20');
  expect(resultado.inssEmpregador).toBe('R$ 160.00');
  expect(resultado.fgts).toBe('R$ 160.00');
  expect(resultado.multaFGTS).toBe('R$ 64.00');
  expect(resultado.seguroAcidenteTrabalho).toBe('R$ 16.00');
});

test('Teste de verificação do salário mínimo', () => {
  const salarioBruto = 2000;
  const estado = 'RS';

  const resultado = verificarSalarioMinimo(salarioBruto, estado);

  expect(resultado).toBe(true);
});

test('Teste de verificação do salário mínimo', () => {
  const salarioBruto = 1500;
  const estado = 'PR';

  const resultado = verificarSalarioMinimo(salarioBruto, estado);

  expect(resultado).toBe(false);
});

test('Teste de verificação do salário mínimo', () => {
  const salarioBruto = 1300;
  const estado = 'MG';

  const resultado = verificarSalarioMinimo(salarioBruto, estado);

  expect(resultado).toBe(false);
});

test('Teste de obtenção do salário mínimo', () => {
  const estado = 'SC';
  const resultado = obtersalarioMinimo(estado);
  expect(resultado).toBe(1521.0);
});

