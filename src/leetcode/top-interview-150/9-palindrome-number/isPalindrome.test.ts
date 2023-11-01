import { isPalindrome, isPalindromeWithStrings } from './isPalindrome';

const functionsToTest = [{ fn: isPalindrome }, { fn: isPalindromeWithStrings }];

describe.each(functionsToTest)('%s', ({ fn }) => {
  test('returns true for a multi-digit palindrome', () => {
    expect(fn(121)).toBe(true);
  });

  test('returns false for a negative number', () => {
    expect(fn(-121)).toBe(false);
  });

  test('returns false for a number divisible by 10', () => {
    expect(fn(10)).toBe(false);
  });

  test('returns true for a single digit number', () => {
    expect(fn(0)).toBe(true);
  });
});
