/* Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
 */

let { randomNumber } = require('./exercicio1');

describe('Testes referentes ao exercicio2', () => {
  it('Testa se e retornado o resultado de divisao de dois numeros e se ela ocorre somente uma vez', () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    randomNumber(10, 2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(10, 2)).toBe(5);
    expect(randomNumber).toHaveBeenLastCalledWith(10, 2);
  }); 
});
