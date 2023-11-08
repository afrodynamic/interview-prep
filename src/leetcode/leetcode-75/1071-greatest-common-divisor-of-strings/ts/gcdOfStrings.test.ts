import { gcdOfStrings } from './gcdOfStrings';

describe('gcdOfStrings', () => {
  test('should return "ABC" for str1 = "ABCABC" and str2 = "ABC"', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
  });

  test('should return "AB" for str1 = "ABABAB" and str2 = "ABAB"', () => {
    expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
  });

  test('should return "" for str1 = "LEET" and str2 = "CODE"', () => {
    expect(gcdOfStrings('LEET', 'CODE')).toBe('');
  });

  test('should return "TAUXX" for str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX" and str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"', () => {
    expect(
      gcdOfStrings(
        'TAUXXTAUXXTAUXXTAUXXTAUXX',
        'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
      )
    ).toBe('TAUXX');
  });

  test('should return "" for str1 = "AAAAAAAAA" and str2 = "AAACCC"', () => {
    expect(gcdOfStrings('AAAAAAAAA', 'AAACCC')).toBe('');
  });
});
