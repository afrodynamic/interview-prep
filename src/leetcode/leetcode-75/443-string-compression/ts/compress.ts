export const compress = (chars: string[]): number => {
  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < chars.length) {
    const currentChar = chars[readIndex];
    let count = 0;

    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      readIndex++;
      count++;
    }

    chars[writeIndex++] = currentChar;

    if (count > 1) {
      for (const digit of count.toString()) {
        chars[writeIndex++] = digit;
      }
    }
  }

  return writeIndex;
};
