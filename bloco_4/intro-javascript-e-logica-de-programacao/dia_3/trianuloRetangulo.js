/**
 * 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
 */

const n = 5;
let triangulo = '';

if (n > 1) {
  for (let indexColuna = 1; indexColuna <= n; indexColuna++) {
   for (let indexLinha = 1; indexLinha <= indexColuna; indexLinha++) {
     triangulo += '*';
   }
   triangulo += '\n';
  }
} else {
  console.log('Entrada invalida!')
}

console.log(triangulo);

//    0  1  2  3  4
//  0[*][ ][ ][ ][ ]
//  1[*][*][ ][] [ ]
//  2[*][*][*][ ][ ]
//  3[*][*][*][*][ ]
//  4[*][*][*][*][*]