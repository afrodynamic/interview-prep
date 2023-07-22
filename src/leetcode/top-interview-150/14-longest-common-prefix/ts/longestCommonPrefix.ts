export function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = prefix.length - 1; i >= 0; i--) {
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) {
        prefix = prefix.substring(0, prefix.length - 1);
        break;
      }
    }
  }

  return prefix;
}
