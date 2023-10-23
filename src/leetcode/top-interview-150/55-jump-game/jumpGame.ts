export const canJump = (nums: number[]): boolean => {
  let maxReachableIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachableIndex) {
      return false;
    }

    maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);

    if (maxReachableIndex >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

export const canJumpRecursive = (nums: number[]): boolean => {
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

    if (canJumpRecursive(newNums)) {
      return true;
    }
  }

  return false;
};
