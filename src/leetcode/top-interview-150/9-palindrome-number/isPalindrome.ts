export const isPalindrome = (x: number) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedNumber = 0;

  while (x > reversedNumber) {
    reversedNumber = reversedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedNumber || x === Math.floor(reversedNumber / 10);
};

export const isPalindromeWithStrings = (x: number): boolean => {
  const xString = x.toString();
  const xStringReversed = xString.split('').reverse().join('');

  return xString === xStringReversed;
};
