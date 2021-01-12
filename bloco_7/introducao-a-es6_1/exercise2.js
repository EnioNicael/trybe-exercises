const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortOddsAndEvens = () => {
  const orderedArray = oddsAndEvens.sort((a, b) => a - b);
  return orderedArray;
};

console.log(oddsAndEvens);
console.log(sortOddsAndEvens());
