import { mergeAlternately } from './mergeAlternately';

describe('mergeAlternately', () => {
  test('should return "apbqcr" for word1 = "abc" and word2 = "pqr"', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
  });

  test('should return "hgef" for word1 = "he" and word2 = "gf"', () => {
    expect(mergeAlternately('he', 'gf')).toBe('hgef');
  });

  test('should return "apbqrs" for word1 = "ab" and word2 = "pqrs"', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
  });

  test('should return "apbqcd" for word1 = "abcd" and word2 = "pq"', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });

  test('should return "a" for word1 = "a" and word2 = ""', () => {
    expect(mergeAlternately('a', '')).toBe('a');
  });

  test('should return "b" for word1 = "" and word2 = "b"', () => {
    expect(mergeAlternately('', 'b')).toBe('b');
  });

  test('should return "" for word1 = "" and word2 = ""', () => {
    expect(mergeAlternately('', '')).toBe('');
  });
});
