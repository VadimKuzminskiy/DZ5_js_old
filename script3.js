function getNumberOfEven(n) {
  let count = 0;
  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

// Math.floor(), округляет результат в меньшую сторону до целого числа, то есть Math.floor(i / 10) будет равно 1234.


  