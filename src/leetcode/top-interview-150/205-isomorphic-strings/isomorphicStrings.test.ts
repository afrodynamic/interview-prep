import { isIsomorphic } from './isomorphicStrings';

describe('isIsomorphic', () => {
  test('returns true for two isomorphic strings', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });

  test('returns true for two isomorphic strings with repeated characters', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
  });

  test('returns false for two non-isomorphic strings with distinct characters', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });

  test('returns false for two non-isomorphic strings with repeated characters', () => {
    expect(isIsomorphic('badc', 'baba')).toBe(false);
  });
});
