import { canPlaceFlowers } from './canPlaceFlowers';

describe('canPlaceFlowers', () => {
  test('should return true for flowerbed = [1,0,0,0,1], n = 1', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  test('should return false for flowerbed = [1,0,0,0,1], n = 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  test('should return true for flowerbed = [0,0,1,0,1], n = 1', () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
  });

  test('should return false for flowerbed = [1,0,0,0,0,1], n = 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false);
  });

  test('should return true for flowerbed = [1,0,0,0,1,0,0], n = 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true);
  });
});
