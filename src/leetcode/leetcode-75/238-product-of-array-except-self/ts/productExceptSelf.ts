export const productExceptSelf = (nums: number[]): number[] => {
  const leftProducts: number[] = new Array(nums.length);
  const rightProducts: number[] = new Array(nums.length);
  const result: number[] = new Array(nums.length);

  leftProducts[0] = 1;
  rightProducts[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
};
