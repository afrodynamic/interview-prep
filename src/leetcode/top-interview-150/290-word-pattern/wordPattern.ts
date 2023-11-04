export const wordPattern = (pattern: string, s: string): boolean => {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWordsMap = new Map();
  const wordsToPatternMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (
      (patternToWordsMap.has(char) && patternToWordsMap.get(char) !== word) ||
      (wordsToPatternMap.has(word) && wordsToPatternMap.get(word) !== char)
    ) {
      return false;
    }

    patternToWordsMap.set(char, word);
    wordsToPatternMap.set(word, char);
  }

  return true;
};
