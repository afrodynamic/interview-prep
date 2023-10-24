export const isSubsequence = (s: string, t: string): boolean => {
  let sPointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sPointer] === t[i]) sPointer++;
  }

  return sPointer === s.length;
};

export const isSubsequenceTwoPointers = (s: string, t: string): boolean => {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  return sPointer === s.length;
};

export const isSubsequenceIndexOf = (s: string, t: string): boolean => {
  let index = -1;

  for (let i = 0; i < s.length; i++) {
    index = t.indexOf(s[i], index + 1);
    if (index === -1) {
      return false;
    }
  }

  return true;
};
