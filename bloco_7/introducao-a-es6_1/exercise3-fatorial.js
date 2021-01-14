const factorial = (number) => {
  if (number < 2) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));