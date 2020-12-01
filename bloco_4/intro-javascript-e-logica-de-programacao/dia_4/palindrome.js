/**
 * Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
 */

function verificaPalindrome(texto) {
  let verificaPalindrome = true;
  let indexReverso = texto.length -1;

  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] !== texto[indexReverso]) {
      verificaPalindrome = false;
      break;
    }
    indexReverso -= 1;
  }

  return verificaPalindrome;
}

console.log(verificaPalindrome("ovo"));// True
// console.log(verificaPalindrome("desenvolvimento"));// False

//  0  1  2  3  4
// [a][r][a][r][a]
