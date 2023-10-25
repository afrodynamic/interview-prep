export const isIsomorphic = (s: string, t: string): boolean => {
  for (let i = 1; i < s.length; i++) {
    if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
      return false;
    }
  }

  return true;
};

export const isIsomorphicTwoMaps = (s: string, t: string): boolean => {
  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
      return false;
    }

    if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
      return false;
    }

    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }

  return true;
};
