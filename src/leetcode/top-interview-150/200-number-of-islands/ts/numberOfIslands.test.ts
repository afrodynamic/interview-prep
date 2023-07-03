import { numIslands } from './numberOfIslands';

describe('numIslands', () => {
  test('should return the number of islands', () => {
    expect(numIslands([
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ])).toEqual(1);
  });

  test('should return the number of islands', () => {
    expect(numIslands([
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ])).toEqual(3);
  });
});
