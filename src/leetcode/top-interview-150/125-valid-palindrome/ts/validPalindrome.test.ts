import { isPalindrome } from './validPalindrome';

describe('isPalindrome', () => {
  test('"A man, a plan, a canal: Panama" should be true', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('"race a car" should be false', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('isPalindrome(\'\') should be true', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
