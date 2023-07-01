import { isValid } from './validParentheses';

describe('isValid', () => {
  test('should return true for ()', () => {
    expect(isValid('()')).toBe(true);
  });

  test('should return true for ()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('should return true for {[()]}', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  test('should return false for (]', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('should return false for [)', () => {
    expect(isValid('[)')).toBe(false);
  });

  test('should return false for (}', () => {
    expect(isValid('(}')).toBe(false);
  });
});
