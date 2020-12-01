/**
 * Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 */

function returnBiggerValueIndex(array) {
  let bigger = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = index;
    }
  }

  return bigger;
}

console.log(returnBiggerValueIndex([2, 3, 6, 7, 10, 1]));
