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

function average(numbers) {
  let sum = 0;
  numbers.forEach(number => sum += number);
  return sum/numbers.length;
}

function repeat(fn, n) {
  // repeat should loop n times 
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye world');
}

const runRepeat = repeat(hello, 5);
console.log(runRepeat);

const runRepeat2 = repeat(goodbye, 5);
console.log(runRepeat2);
