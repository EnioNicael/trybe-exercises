/**
 * 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
 */

 const n = 5;
 let quadrado = '';

 if (n > 1) {
   for (let index = 0; index < n; index++) {
     quadrado += '*';
   }

   for (let index = 0; index < n; index++) {
     console.log(quadrado);
   }
 } else {
   console.log('Entrada invalida!');
 }

//    0  1  2  3  4
//  0[*][*][*][*][*]
//  1[*][*][*][*][*]
//  2[*][*][*][*][*]
//  3[*][*][*][*][*]
//  4[*][*][*][*][*]