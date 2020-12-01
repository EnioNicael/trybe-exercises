/**
 * Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
 */

function returnSmallValueIndex(array) {
  let small = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < small) {
      small = index;
    }
  }

  return small;
}

console.log(returnSmallValueIndex([2, 4, 6, 7, 10, 0, -3]));
