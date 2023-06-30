import { removeDuplicates } from './removeDuplicatesFromSortedArray2';

describe('removeDuplicatesFromSortedArray2', () => {
  test('removeDuplicates([1,1,1,2,2,3]) should be 5', () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toBe(5);
  });

  test('removeDuplicates([0,0,1,1,1,1,2,3,3]) should be 7', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
  });
});
