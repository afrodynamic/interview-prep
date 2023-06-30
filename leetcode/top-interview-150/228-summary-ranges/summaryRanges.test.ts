const { summaryRanges } = require('./summaryRanges');

describe('summaryRanges', () => {
  test('should return ["0->2","4->5","7"] for nums = [0,1,2,4,5,7]', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  });

  test('should return ["0","2->4","6","8->9"] for nums = [0,2,3,4,6,8,9]', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  });
});
