export const canJump = (nums: number[]): boolean => {
  if (nums.length === 1) {
    return true;
  }

  const lastIndex = nums.length - 1;

  for (let jumpLength = nums[0]; jumpLength > 0; jumpLength--) {
    if (jumpLength === lastIndex) {
      return true;
    }

    if (jumpLength > lastIndex) {
      continue;
    }

    const newNums = nums.slice(jumpLength);

    if (canJump(newNums)) {
      return true;
    }
  }

  return false;
};
