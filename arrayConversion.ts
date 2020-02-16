function arrayConversion(array: number[]) {
  let isOdd = true;

  while (array.length !== 1) {
    array = sumProduct(array, isOdd);
    isOdd = !isOdd;
  }

  return array[0];
}

function sumProduct(nums: number[], isOdd: boolean) {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }
  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 2, 3, 4]));
