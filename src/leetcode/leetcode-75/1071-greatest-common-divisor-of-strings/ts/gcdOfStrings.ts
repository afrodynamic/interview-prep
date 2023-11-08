export const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 === str2) {
    return str1;
  }

  const minStringLength = Math.min(str1.length, str2.length);
  const smallerString = str1.length < str2.length ? str1 : str2;
  const largerString = smallerString === str1 ? str2 : str1;

  for (let i = minStringLength; i > 0; i--) {
    if (largerString.length % i === 0 && smallerString.length % i === 0) {
      const repeatCountLargerString = largerString.length / i;
      const repeatCountSmallerString = smallerString.length / i;

      const substring = smallerString.slice(0, i);

      const repeatStringLarger = substring.repeat(repeatCountLargerString);
      const repeatStringSmaller = substring.repeat(repeatCountSmallerString);

      if (
        repeatStringLarger === largerString &&
        repeatStringSmaller === smallerString
      ) {
        return substring;
      }
    }
  }

  return '';
};
