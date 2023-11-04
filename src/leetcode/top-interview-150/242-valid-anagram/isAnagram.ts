export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const sSorted = s.split('').sort();
  const tSorted = t.split('').sort();

  for (let i = 0; i < sSorted.length; i++) {
    if (sSorted[i] !== tSorted[i]) {
      return false;
    }
  }

  return true;
};
