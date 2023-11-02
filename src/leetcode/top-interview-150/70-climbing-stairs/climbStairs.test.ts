import { climbStairs } from './climbStairs';

describe('climbStairs', () => {
  test('should return 1 for n = 1', () => {
    expect(climbStairs(1)).toEqual(1);
  });

  test('should return 2 for n = 2', () => {
    expect(climbStairs(2)).toEqual(2);
  });

  test('should return 3 for n = 3', () => {
    expect(climbStairs(3)).toEqual(3);
  });

  test('should return 5 for n = 4', () => {
    expect(climbStairs(4)).toEqual(5);
  });

  test('should return 8 for n = 5', () => {
    expect(climbStairs(5)).toEqual(8);
  });
});
