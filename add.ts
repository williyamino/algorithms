function add(a: number, b: number): number {
  return a + b;
}

function add2(...params: number[]) {
  let total = 0;

  params.forEach(element => {
    total += element;
  });

  return total;
}

console.log(add(2, 3));
console.log(add(2, 7));
console.log(add2(3, 4, 5, 10));
