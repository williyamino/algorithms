function increasingSequence(array: Number[]) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      count++;
    }
  }
  return count < 1;
}

console.log(increasingSequence([1, 2, 3, 4, 5, 6]));
