function alternatingSums(array: number[]) {
  let evenSum = 0;
  let oddSum = 0;

  array.forEach((element, index) => {
    if (index % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  });

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
