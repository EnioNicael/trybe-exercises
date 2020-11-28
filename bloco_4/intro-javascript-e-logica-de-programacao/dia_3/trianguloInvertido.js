/**
 * Imprime triangulo com lado invertido
 */

const n = 5;
let triangulo = '';
let indexDescendente;

if (n > 1) {
  for (let indexColuna = n; indexColuna > 0; indexColuna--) {
    indexDescendente = indexColuna - 1;
    for (let indexLinha = 0; indexLinha < n; indexLinha++) {
      if(indexLinha < indexDescendente) {
        triangulo += ' ';
      } else {
        triangulo += '*';
      }
    }
    triangulo += '\n';
  }
} else {
  console.log('Entrada invalida!')
}

console.log(triangulo);

//   0  1  2
// 0[ ][ ][*]
// 1[ ][*][*]
// 2[*][*][*]
