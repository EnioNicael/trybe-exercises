/**
 * Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os    ângulos representarem os ângulos de um triângulo e false caso contrário.
 */

let a = 60;
let b = 60;
let c = 60;

let triangulo = a + b + c;

if (triangulo == 180) {
  console.log(true);
} else {
  console.log(false);
}
