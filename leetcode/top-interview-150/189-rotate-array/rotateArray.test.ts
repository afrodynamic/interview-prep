import { rotate } from './rotateArray';

describe('rotateArray', () => {
  test('rotateArray([1,2,3,4,5,6,7], 3) should be [5,6,7,1,2,3,4]', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test('rotateArray([-1,-100,3,99], 2) should be [3,99,-1,-100]', () => {
    const nums = [-1, -100, 3, 99];
    rotate(nums, 2);
    expect(nums).toEqual([3, 99, -1, -100]);
  });
});
