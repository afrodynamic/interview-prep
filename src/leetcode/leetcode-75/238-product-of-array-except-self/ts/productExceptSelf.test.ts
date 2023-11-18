import { productExceptSelf } from './productExceptSelf';

describe('productExceptSelf', () => {
  test('should return [24, 12, 8, 6] for input [1, 2, 3, 4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test('should return [0, 0, 0, 0] for input [0, 0, 0, 0]', () => {
    expect(productExceptSelf([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  });

  test('should return [120, 60, 40, 30, 24] for input [1, 2, 3, 4, 5]', () => {
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });

  test('should return [1] for input [1]', () => {
    expect(productExceptSelf([1])).toEqual([1]);
  });
});
