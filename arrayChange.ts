function arrayChange(array: number[]) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
      const difference = array[i] + 1 - array[i + 1];
      array[i + 1] = array[i] + 1;
      count += difference;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
