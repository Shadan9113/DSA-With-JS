function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 3, 4, 5, 6, 7, 8, 8];

console.log("the sum of the array element is", findSum(numbers));
