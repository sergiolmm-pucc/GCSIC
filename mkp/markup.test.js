// markup.test.js

const { calculateMarkup, clearMarkup } = require('../mkp/mkp.js');

test('calculateMarkup retorna o valor correto', () => {
  const fixedExpenses = 10;
  const variableExpenses = 20;
  const profit = 30;
  const expectedMarkup = '2.50';

  const markup = calculateMarkup(fixedExpenses, variableExpenses, profit);

  expect(markup).toBe(expectedMarkup);
});

test('clearMarkup retorna "0"', () => {
  const result = clearMarkup();
  expect(result).toBe('0');
});
