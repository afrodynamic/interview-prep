export const isSubsequence = (s: string, t: string): boolean => {
  let index = -1;

  for (let i = 0; i < s.length; i++) {
    index = t.indexOf(s[i], index + 1);
    if (index === -1) {
      return false;
    }
  }

  return true;
};
