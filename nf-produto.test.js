test(
  'Calculo de imposto deve estar correto',
  () => {
    const valorServico = 100;
    const taxaImposto = 10;
    const imposto = (valorServico * taxaImposto) / 100;
    expect(imposto).toBe(10);
  }
);