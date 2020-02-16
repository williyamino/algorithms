function arrayMaxConsecutiveSum(array: number[], n: number) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    sum += array[i];
  }

  max = sum;

  for (let i = n; i < array.length; i++) {
    sum -= array[i - n];
    sum += array[i];

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
