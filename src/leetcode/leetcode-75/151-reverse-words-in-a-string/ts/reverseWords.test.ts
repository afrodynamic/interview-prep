import { reverseWords } from './reverseWords';

describe('reverseWords', () => {
  test('should return "blue is sky the" for input "the sky is blue"', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the');
  });

  test('should return "world! hello" for input "hello world!"', () => {
    expect(reverseWords('hello world!')).toBe('world! hello');
  });

  test('should return "example good a" for input "a good example"', () => {
    expect(reverseWords('a good example')).toBe('example good a');
  });

  test('should return "world hello" for input "  hello world  "', () => {
    expect(reverseWords('  hello world  ')).toBe('world hello');
  });
});
