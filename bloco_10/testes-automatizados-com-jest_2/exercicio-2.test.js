const { expect } = require('@jest/globals');
const getUserName = require('./exercicio-2');

describe('Testa busca de dados com Promises', () => {
  test('Testa se um usuario foi encontrado.', () => {
    return getUserName(4).then(data => {
      expect(data).toBe('Mark');
    });
  });
});