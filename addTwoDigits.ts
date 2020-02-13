function addDigits(value: string | number) {
  let convertedValue = value?.toString().split("");
  let sum = null;

  convertedValue?.forEach(element => {
    sum += +element;
  });

  return sum;
}

console.log(addDigits("6587"));

function addTwoDigits(value: any): number {
  let convertedValue = value?.toString().split("");

  return convertedValue.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(87));
