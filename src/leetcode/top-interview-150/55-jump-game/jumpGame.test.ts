import { canJump } from './jumpGame';

describe('canJump', () => {
  test('should return true for reachable last index', () => {
    const nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toBe(true);
  });

  test('should return false for unreachable last index', () => {
    const nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toBe(false);
  });

  test('should handle a single element array', () => {
    const nums = [1];

    expect(canJump(nums)).toBe(true);
  });

  test('should handle a single element array of value 0', () => {
    const nums = [0];

    expect(canJump(nums)).toBe(true);
  });

  test('should handle an array with elements larger than the remaining array size', () => {
    const nums = [7, 7, 6, 5];

    expect(canJump(nums)).toBe(true);
  });
});
