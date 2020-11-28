/**
 * Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalDeImpares = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    totalDeImpares += 1;
  }
}

if (totalDeImpares > 0) {
  console.log(totalDeImpares);
} else {
  console.log("nenhum valor ímpar encontrado");
}
