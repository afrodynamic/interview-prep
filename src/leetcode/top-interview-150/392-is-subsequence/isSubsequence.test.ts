import { isSubsequence, isSubsequenceIndexOf } from './isSubsequence';

const functionsToTest = [{ fn: isSubsequence }, { fn: isSubsequenceIndexOf }];

describe.each(functionsToTest)('%s', ({ fn }) => {
  test('returns true if s is a subsequence of t is true', () => {
    expect(fn('abc', 'ahbdgdc')).toBe(true);
  });

  test('returns false if the first letter of s is missing in t', () => {
    expect(fn('xahbdgdc', 'ahbdgdc')).toBe(false);
  });

  test('returns false if s and t are single letters where s !== t', () => {
    expect(fn('a', 'b')).toBe(false);
  });

  test('returns false if an intermediate letter of s is missing in t', () => {
    expect(fn('axc', 'ahbgdc')).toBe(false);
  });

  test('returns true for empty s string', () => {
    expect(fn('', 'ahbdgdc')).toBe(true);
  });

  test('returns true for empty t string', () => {
    expect(fn('ahbdgdc', '')).toBe(false);
  });
});
