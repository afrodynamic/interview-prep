export function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
      i++;
    }
    const end = nums[i];
    result.push(start === end ? `${start}` : `${start}->${end}`);
  }

  return result;
}
