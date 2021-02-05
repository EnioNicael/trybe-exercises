const { expect, test } = require('@jest/globals');
const { error } = require('console');
const getUserName = require('./exercicio-2');

describe('Testa busca de dados com Promises', () => {
  it('Testa se um usuario foi encontrado.', () => {
    return getUserName(4).then(data => {
      expect(data).toBe('Mark');
    });
  });
  it('Testa o caso em que o usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' })
    })
  });
});