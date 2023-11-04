import { wordPattern } from './wordPattern';

describe('wordPattern', () => {
  test('should return true for pattern = "abba", s = "dog cat cat dog"', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
  });

  test('should return false for pattern = "abba", s = "dog cat cat fish"', () => {
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
  });

  test('should return false for pattern = "aaaa", s = "dog cat cat dog"', () => {
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false);
  });

  test('should return false for pattern = "abba", s = "dog dog dog dog"', () => {
    expect(wordPattern('abba', 'dog dog dog dog')).toBe(false);
  });

  test('should return false if the length of the pattern !== number of words in s', () => {
    expect(wordPattern('aaa', 'aa aa aa aa')).toBe(false);
  });
});
