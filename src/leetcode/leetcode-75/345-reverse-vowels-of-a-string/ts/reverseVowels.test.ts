import { reverseVowels } from './reverseVowels';

describe('reverseVowels', () => {
  test('should return "holle" for input "hello"', () => {
    expect(reverseVowels('hello')).toBe('holle');
  });

  test('should return "leotcede" for input "leetcode"', () => {
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });

  test('should return "Aa" for input "aA"', () => {
    expect(reverseVowels('aA')).toBe('Aa');
  });

  test('should return "racecar" for input "racecar"', () => {
    expect(reverseVowels('racecar')).toBe('racecar');
  });

  test('should return "bcd" for input "bcd"', () => {
    expect(reverseVowels('bcd')).toBe('bcd');
  });
});
