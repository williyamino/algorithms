function longestStringInArray(array: string[]) {
  let longestWordLength = 0;
  let longestWords = [];

  array.forEach((element: string) => {
    longestWordLength =
      element.length < longestWordLength ? longestWordLength : element.length;
  });

  array.forEach((element: string) => {
    element.length === longestWordLength && longestWords.push(element);
  });

  return longestWords;
}

console.log(longestStringInArray(["test", "wer", "best"]));
