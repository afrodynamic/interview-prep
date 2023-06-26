const { removeElement } = require('./removeElement');

describe('removeElement', () => {
  test('should remove all instances of val from nums', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;

    expect(removeElement(nums, val)).toEqual(2);
    expect(nums).toEqual([2, 2]);
  });

  test('should remove all instances of val from nums', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    expect(removeElement(nums, val)).toEqual(5);
    expect(nums).toEqual([0, 1, 3, 0, 4]);
  });
});
