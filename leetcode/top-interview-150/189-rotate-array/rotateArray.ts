export function rotate(nums: number[], k: number): void {
  const reverse = (start: number, end: number) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  const n = nums.length;
  k %= n;

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
};
