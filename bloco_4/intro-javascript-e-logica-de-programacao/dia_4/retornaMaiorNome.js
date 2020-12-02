/**
 * Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
 */

function returnBiggerName(array) {
  let bigger = array[0];
  let nameLength = array[0].length;

  for (let index = 0; index < array.length; index += 1) {
    nameLength = array[index].length;
    if (nameLength > bigger.length) {
      bigger = array[index];
    }
  }

  return bigger;
}

console.log(returnBiggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
