export function removeDuplicates(nums: number[]): number {
  let i = nums.length - 1;
  let currentNum = nums[i];

  while (i > 0) {
    if (nums[i - 1] === currentNum) {
      nums.splice(i - 1, 1);
    } else {
      currentNum = nums[i - 1];
    }

    i--;
  }

  return nums.length;
};
