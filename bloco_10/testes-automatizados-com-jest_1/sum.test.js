const sum = require('./sum');

test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  expect(sum(2, 3)).toBe(5);
});