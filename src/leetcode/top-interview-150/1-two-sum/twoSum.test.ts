import { twoSum } from './twoSum';

describe('twoSum', () => {
  test('returns the correct indices for a valid input', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('returns an empty array for an invalid input', () => {
    expect(twoSum([2, 7, 11, 15], 3)).toEqual([]);
  });

  test('handles an array with duplicate values', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
