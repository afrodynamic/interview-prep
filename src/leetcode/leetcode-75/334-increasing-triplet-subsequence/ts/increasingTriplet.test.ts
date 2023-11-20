import { increasingTriplet } from './increasingTriplet';

describe('increasingTriplet', () => {
  test('should return false for an empty array', () => {
    expect(increasingTriplet([])).toBe(false);
  });

  test('should return false for an array with less than 3 elements', () => {
    expect(increasingTriplet([1])).toBe(false);
    expect(increasingTriplet([1, 2])).toBe(false);
  });

  test('should return true for an array with an increasing triplet', () => {
    expect(increasingTriplet([1, 2, 3])).toBe(true);
    expect(increasingTriplet([5, 4, 3, 2, 1, 5, 6])).toBe(true);
  });

  test('should return false for an array without an increasing triplet', () => {
    expect(increasingTriplet([1, 1, 1])).toBe(false);
    expect(increasingTriplet([3, 2, 1])).toBe(false);
    expect(increasingTriplet([1, 2, 2, 1])).toBe(false);
  });
});
