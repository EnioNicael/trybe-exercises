
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
  return arrays.reduce(reducer, []);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);