function alphabetSubSequence(s: string) {
  const chars: string[] = s.split("");
  const charValue: number[] = [];

  chars.forEach((char: string) => {
    charValue.push(char.charCodeAt(0));
  });

  if (new Set(charValue).size !== charValue.length) {
    return false;
  }

  for (let i = 0; i < charValue.length - 1; i++) {
    if (charValue[i] >= charValue[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubSequence("Aa"));
console.log(alphabetSubSequence("efhjklii"));
