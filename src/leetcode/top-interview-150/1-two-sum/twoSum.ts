export const twoSum = (nums: number[], target: number): number[] => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetDifference = target - nums[i];

    if (numMap.has(targetDifference)) {
      return [numMap.get(targetDifference), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};
