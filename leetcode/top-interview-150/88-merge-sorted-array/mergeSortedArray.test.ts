const { merge } = require('./mergeSortedArray');

describe('mergeSortedArray', () => {
  test('should merge nums2 into nums1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
