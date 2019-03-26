function max(numbers) {
  let i = 0;
  let currentMax = numbers[0];

  while (i < numbers.length) {
      i++;
      if (numbers[i] > currentMax) {
          currentMax = numbers[i];
  }
}
return currentMax;
}

const numbersTest = [4, 5, 8, 19, 12];
const testFunction = function max(numbersTest);
testFunction;

function mmin(numbers) {
  let i = 0;
  let currentMin = numbers[0];

  while (i < numbers.length) {
      i++;
      if (numbers[i] < currentMin) {
          currentMin = numbers[i];
  }
}
return currentMin;
} 