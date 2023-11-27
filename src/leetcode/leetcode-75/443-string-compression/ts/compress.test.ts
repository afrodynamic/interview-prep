import { compress } from './compress';

describe('compress', () => {
  test('should return 6 for chars = ["a", "a", "b", "b", "c", "c"]', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c'];
    expect(compress(chars)).toBe(6);
    expect(chars).toEqual(['a', '2', 'b', '2', 'c', '2']);
  });

  test('should return 4 for ["a","b","b","b","b","b","b","b","b","b","b","b","b"]', () => {
    const chars = [
      'a',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
    ];
    expect(compress(chars)).toBe(4);
    expect(chars).toEqual([
      'a',
      'b',
      '1',
      '2',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
    ]);
  });

  test('should return 4 for chars = ["a", "a", "a", "b"]', () => {
    const chars = ['a', 'a', 'a', 'b'];
    expect(compress(chars)).toBe(3);
    expect(chars).toEqual(['a', '3', 'b', 'b']);
  });

  test('should return 1 for chars = ["a"]', () => {
    const chars = ['a'];
    expect(compress(chars)).toBe(1);
    expect(chars).toEqual(['a']);
  });

  test('should return 3 for chars = ["a", "b", "c"]', () => {
    const chars = ['a', 'b', 'c'];
    expect(compress(chars)).toBe(3);
    expect(chars).toEqual(['a', 'b', 'c']);
  });

  test('should return 0 for empty chars array', () => {
    const chars = [];
    expect(compress(chars)).toBe(0);
    expect(chars).toEqual([]);
  });
});
