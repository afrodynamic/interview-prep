export function removeDuplicates(nums: number[]): number {
  let k = 0;
  let elementCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      elementCounter = 1;
      nums[k] = nums[i];
      k++;
    } else if (nums[i] === nums[i - 1] && elementCounter < 2) {
      elementCounter++;
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
