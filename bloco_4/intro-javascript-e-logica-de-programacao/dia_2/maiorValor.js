/**
 * Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 */

let maior = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log(maior);
