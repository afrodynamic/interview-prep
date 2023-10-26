import { letterCombinations } from './letterCombinations';

describe('letterCombinations', () => {
  test('handles returning all the combinations for a multi-digit input', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  test('return an empty array for an empty string input', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  test('handles returning all the combinations for a single-digit input', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});
