const uppercase = require('./exercicio-1');

test('Testa se um texto e transformado para letras maiusculas', (done) => {
  function callback(text) {
    try {
      expect(text).toBe('XABLAU');
      done();
    } catch (error) {
      done(error);
    }
  }
  uppercase('xablau', callback);
});