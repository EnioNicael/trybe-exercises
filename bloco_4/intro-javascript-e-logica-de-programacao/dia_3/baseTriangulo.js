/**
 * 4- Depois, faça uma pirâmide com n asteriscos de base:
 */

const n = 7;
let triangulo = '';
let meio = Math.floor(n / 2);
let direita;
let esquerda;

for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
  direita = meio + indexColuna;
  esquerda = meio - indexColuna;
  
  if (esquerda < 0 || direita > n) {
    break;
  } else {
    for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
      if(indexLinha >= esquerda && indexLinha <= direita) {
        triangulo += '*';
      } else {
        triangulo += ' ';
      }
    }
  }
  triangulo += '\n';
}

console.log(triangulo)

//   0  1  2  3  4  5  6
// 0[ ][ ][ ][*][ ][ ][ ]
// 1[ ][ ][*][*][*][ ][ ]
// 2[ ][*][*][*][*][*][ ]
// 3[*][*][*][*][*][*][*]