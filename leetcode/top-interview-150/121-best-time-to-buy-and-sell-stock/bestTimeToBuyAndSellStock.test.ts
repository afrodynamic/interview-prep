import { maxProfit } from './bestTimeToBuyAndSellStock';

describe('maxProfit', () => {
  test('maxProfit([7,1,5,3,6,4]) should be 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('maxProfit([7,6,4,3,1]) should be 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
