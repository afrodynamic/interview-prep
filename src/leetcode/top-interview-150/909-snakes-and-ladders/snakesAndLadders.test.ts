import { snakesAndLadders } from './snakesAndLadders';

describe('snakesAndLadders', () => {
  test('should output 4 when board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]', () => {
    expect(
      snakesAndLadders([
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 35, -1, -1, 13, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, 15, -1, -1, -1, -1],
      ])
    ).toBe(4);
  });

  test('should output 1 when board = [[-1,-1],[-1,3]]', () => {
    expect(
      snakesAndLadders([
        [-1, -1],
        [-1, 3],
      ])
    ).toBe(1);
  });

  test('should return -1 for unreachable target', () => {
    const board = [
      [-1, 7, 4],
      [5, 2, 6],
      [-1, 3, 8],
    ];
    const result = snakesAndLadders(board);
    expect(result).toBe(-1);
  });
});
