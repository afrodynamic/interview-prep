const phoneNumberLetterMap = new Map<string, string>([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
]);

export const letterCombinations = (digits: string): string[] => {
  if (digits === '') {
    return [];
  }

  const result: string[] = [];

  const backtrack = (combination: string, remainingDigits: string) => {
    if (remainingDigits.length === 0) {
      result.push(combination);
      return;
    }

    const digit = remainingDigits[0];
    const letters = phoneNumberLetterMap.get(digit);

    for (let i = 0; letters && i < letters.length; i++) {
      backtrack(combination + letters[i], remainingDigits.slice(1));
    }
  };

  backtrack('', digits);

  return result;
};
