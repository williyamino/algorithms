function alphabeticShift(input: string) {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let inputShifted = input.split("");

  for (let i = 0; i < input.length; i++) {
    let index = 0;

    if (input[i] !== "z") {
      index = alphabet.indexOf(input[i]) + 1;
    }

    inputShifted[i] = alphabet[index];
  }

  return inputShifted.join("");
}

console.log(alphabeticShift("crazy"));
