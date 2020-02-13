function adjacentElementsProduct(arr: number[]): number {
  let largestProduct = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([2, 3, -4, 5, 6, 7, 8, 3, 4, 9, 9]));
