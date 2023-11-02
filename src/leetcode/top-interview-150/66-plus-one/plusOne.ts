export const plusOne = (digits: number[]): number[] => {
  const numString = BigInt(digits.join('')) + BigInt(1);
  return numString.toString().split('').map(Number);
};
