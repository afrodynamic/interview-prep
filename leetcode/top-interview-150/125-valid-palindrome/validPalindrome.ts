export function isPalindrome(s: string): boolean {
  const phrase = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (phrase.length === 0) {
    return true;
  }

  let left = 0;
  let right = phrase.length - 1;

  while (left < right) {
    if (phrase[left] !== phrase[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
