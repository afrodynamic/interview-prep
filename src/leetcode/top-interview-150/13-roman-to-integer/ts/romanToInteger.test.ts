import { romanToInt } from './romanToInteger';

describe('romanToInt', () => {
  test('should return 3 when input is III', () => {
    expect(romanToInt('III')).toBe(3);
  });

  test('should return 58 when input is LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  test('should return 1994 when input is MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
