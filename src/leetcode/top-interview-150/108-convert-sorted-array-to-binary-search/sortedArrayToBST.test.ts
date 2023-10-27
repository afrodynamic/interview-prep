import { BSTtoArray, sortedArrayToBST } from './sortedArraytoBST';

describe('sortedArrayToBST', () => {
  test('returns a height balanced BST for an array', () => {
    const input = [-10, -3, 0, 5, 9];
    const output = [0, -3, 9, -10, null, 5];
    expect(BSTtoArray(sortedArrayToBST(input))).toStrictEqual(output);
  });

  test('returns a height balanced BST for a two-element array', () => {
    const input = [1, 3];
    const output = [3, 1];
    expect(BSTtoArray(sortedArrayToBST(input))).toStrictEqual(output);
  });
});
