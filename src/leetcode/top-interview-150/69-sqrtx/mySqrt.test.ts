import { mySqrt } from './mySqrt';

describe('mySqrt', () => {
  test('should return 2 for x = 4', () => {
    expect(mySqrt(4)).toBe(2);
  });

  test('should return 3 for x = 9', () => {
    expect(mySqrt(9)).toBe(3);
  });

  test('should return 2 for x = 8', () => {
    expect(mySqrt(16)).toBe(4);
  });

  test('should return 1 for x = 1', () => {
    expect(mySqrt(1)).toBe(1);
  });

  test('should return 0 for x = 0', () => {
    expect(mySqrt(0)).toBe(0);
  });
});
