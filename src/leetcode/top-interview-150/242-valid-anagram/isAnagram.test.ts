import { isAnagram } from './isAnagram';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
    expect(isAnagram('rat', 'tar')).toBe(true);
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  it('should return false for invalid anagrams', () => {
    expect(isAnagram('car', 'rat')).toBe(false);
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('abc', 'def')).toBe(false);
  });

  it('should return false for strings of different lengths', () => {
    expect(isAnagram('abc', 'abcd')).toBe(false);
    expect(isAnagram('abcd', 'abc')).toBe(false);
  });
});
