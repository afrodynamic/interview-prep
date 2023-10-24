import { isSubsequence } from './isSubsequence';

describe('isSubsequence', () => {
  test('returns true if s is a subsequence of t is true', () => {
    expect(isSubsequence('abc', 'ahbdgdc')).toBe(true);
  });

  test('returns false if the first letter of s is missing in t', () => {
    expect(isSubsequence('xahbdgdc', 'ahbdgdc')).toBe(false);
  });

  test('returns false if s and t are single letters where s !== t', () => {
    expect(isSubsequence('a', 'b')).toBe(false);
  });

  test('returns false if an intermediate letter of s is missing in t', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });

  test('returns true for empty s string', () => {
    expect(isSubsequence('', 'ahbdgdc')).toBe(true);
  });

  test('returns true for empty t string', () => {
    expect(isSubsequence('ahbdgdc', '')).toBe(false);
  });
});
