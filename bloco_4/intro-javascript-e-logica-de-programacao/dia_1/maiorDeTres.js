/* 
  Faça um programa que retorne o maior de tres números. Defina no começo do 
  programa duas variáveis com os valores que serão comparados.
*/

let a = 16;
let b = 9;
let c = 5;
let maior = 0;

if (a > b) {
  if (a > c) {
    maior = a;
  }
} else if (a < b) {
  if (b > c) {
    maior = b;
  } else {
    maior = c;
  }
}

console.log(maior);
