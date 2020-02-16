function areSimilar(firstArray: number[], secondArray: number[]) {
  const c: number[] = [];
  let d: number[] = [];

  if (firstArray.toString() === secondArray.toString()) {
    return true;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      c.push(firstArray[i]);
      d.push(secondArray[i]);
    }
  }
  d = d.reverse();

  if (c.length === 2 && c.toString() === d.toString()) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(areSimilar([1, 2, 3, 2, 3], [2, 1, 3, 2, 3]));
console.log(areSimilar([1, 2, 2, 2], [2, 1, 1, 2]));
