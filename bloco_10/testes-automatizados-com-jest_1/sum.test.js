const { test, expect } = require('@jest/globals');
const sum = require('./sum');

test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toBe(9);
});