export const reverseVowels = (s: string): string => {
  let startPtr = 0;
  let endPtr = s.length - 1;
  const result = s.split('');
  const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);

  while (startPtr < endPtr) {
    if (vowels.has(s[startPtr])) {
      while (endPtr > startPtr && !vowels.has(s[endPtr])) {
        endPtr--;
      }

      if (vowels.has(s[endPtr])) {
        [result[startPtr], result[endPtr]] = [s[endPtr], s[startPtr]];
        startPtr++;
        endPtr--;
      }
    } else {
      startPtr++;
    }
  }

  return result.join('');
};
