import { searchInsert } from './searchInsert';

describe('searchInsert', () => {
  test('handles an existing target', () => {
    const inputNums = [1, 3, 5, 6];
    const inputTarget = 5;
    const output = 2;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles a missing target in the range of the array', () => {
    const inputNums = [1, 3, 5, 6];
    const inputTarget = 2;
    const output = 1;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles a missing target greater than the range of the array', () => {
    const inputNums = [1, 3, 5, 6];
    const inputTarget = 7;
    const output = 4;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles a missing target less than the range of the array', () => {
    const inputNums = [1, 3, 5, 6];
    const inputTarget = 0;
    const output = 0;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles an array with a single element and a missing target', () => {
    const inputNums = [2];
    const inputTarget = 1;
    const output = 0;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles an array with a single element and a missing target greater than the element', () => {
    const inputNums = [2];
    const inputTarget = 3;
    const output = 1;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles the target at the beginning of the array', () => {
    const inputNums = [1, 3, 5, 6];
    const inputTarget = 1;
    const output = 0;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });

  test('handles the target at the end of the array', () => {
    const inputNums = [1, 3, 5, 6];
    const inputTarget = 6;
    const output = 3;
    expect(searchInsert(inputNums, inputTarget)).toBe(output);
  });
});
