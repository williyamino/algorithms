function addBorder(array: string[]) {
  const wall = "🎃".repeat(array[0].length + 2);

  array.unshift(wall);
  array.push(wall);

  for (let i = 1; i < array.length - 1; i++) {
    array[i] = "🎃".concat(array[i], "🎃");
  }

  return array;
}

console.log(addBorder(["test", "best"]));
