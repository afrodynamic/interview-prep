import { plusOne } from './plusOne';

describe('plusOne', () => {
  test('adds one to the end of the array', () => {
    const input = [1, 2, 3];
    const output = [1, 2, 4];
    expect(plusOne(input)).toStrictEqual(output);
  });

  test('handles carrying over to the next digit', () => {
    const input = [9, 9, 9];
    const output = [1, 0, 0, 0];
    expect(plusOne(input)).toStrictEqual(output);
  });

  test('handles single-digit input', () => {
    const input = [0];
    const output = [1];
    expect(plusOne(input)).toStrictEqual(output);
  });

  test('handles input that is larger than Number.MAX_SAFE_INTEGER', () => {
    const input = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
    const output = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4];
    expect(plusOne(input)).toStrictEqual(output);
  });
});
