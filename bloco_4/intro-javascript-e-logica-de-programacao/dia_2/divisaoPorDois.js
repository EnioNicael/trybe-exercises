/**
 * Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 */


let meuArray = [];

for (let index = 0; index < 25; index++) {
  meuArray.push(index + 1);
}

console.log(meuArray);

for (let index = 0; index < meuArray.length; index++) {
  console.log(meuArray[index] / 2);
}
