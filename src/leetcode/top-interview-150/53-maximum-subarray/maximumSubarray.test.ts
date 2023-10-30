import { maxSubArray } from './maximumSubarray';

describe('maxSubArray', () => {
  test('handles a mixed positive/negative element array', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  test('handles a single element array', () => {
    expect(maxSubArray([1])).toEqual(1);
  });

  test('handles an array which should include all elements in the sum', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });
});
