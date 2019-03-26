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


function filter(arr, fn) {
  const newArray = []
  for (let i = 0; i < arr.length; i++){
  if(fn(arr[i]) === true);{
   newArray.push(arr[i]); 
  }
  }
  return newArray;
}



// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});
console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
