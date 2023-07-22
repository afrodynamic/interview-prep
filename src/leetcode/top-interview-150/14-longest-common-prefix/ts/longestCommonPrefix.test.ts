import { longestCommonPrefix } from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  test('longestCommonPrefix(["flower","flow","flight"]) should be "fl"', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('longestCommonPrefix(["dog","racecar","car"]) should be ""', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
