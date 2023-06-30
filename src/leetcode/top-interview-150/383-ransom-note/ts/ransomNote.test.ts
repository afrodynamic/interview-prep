import { canConstruct } from './ransomNote';

describe('canConstruct', () => {
  test('canConstruct(\'a\', \'b\') should be false', () => {
    expect(canConstruct('a', 'b')).toBe(false);
  });

  test('canConstruct(\'aa\', \'ab\') should be false', () => {
    expect(canConstruct('aa', 'ab')).toBe(false);
  });

  test('canConstruct(\'aa\', \'aab\') should be true', () => {
    expect(canConstruct('aa', 'aab')).toBe(true);
  });
});
