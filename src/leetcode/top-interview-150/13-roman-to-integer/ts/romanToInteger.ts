export function romanToInt(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    XC: 90,
    L: 50,
    C: 100,
    CD: 400,
    CM: 900,
    D: 500,
    M: 1000,
  };

  let i = 0;
  let result = 0;

  while (i < s.length) {
    const currentSymbol = s[i];
    const nextSymbol = s[i + 1];

    if (romanToIntMap[currentSymbol + nextSymbol]) {
      result += romanToIntMap[currentSymbol + nextSymbol];
      i += 2;
    } else {
      result += romanToIntMap[currentSymbol];
      i += 1;
    }
  }

  return result;
}
