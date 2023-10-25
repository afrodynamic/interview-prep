import { isIsomorphic, isIsomorphicTwoMaps } from './isomorphicStrings';

const functionsToTest = [{ fn: isIsomorphic }, { fn: isIsomorphicTwoMaps }];

describe.each(functionsToTest)('%s', ({ fn }) => {
  test('returns true for two isomorphic strings', () => {
    expect(fn('paper', 'title')).toBe(true);
  });

  test('returns true for two isomorphic strings with repeated characters', () => {
    expect(fn('egg', 'add')).toBe(true);
  });

  test('returns false for two non-isomorphic strings with distinct characters', () => {
    expect(fn('foo', 'bar')).toBe(false);
  });

  test('returns false for two non-isomorphic strings with repeated characters', () => {
    expect(fn('badc', 'baba')).toBe(false);
  });
});
