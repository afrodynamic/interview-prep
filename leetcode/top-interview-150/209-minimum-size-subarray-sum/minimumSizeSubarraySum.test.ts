const { minSubArrayLen } = require("./minimumSizeSubarraySum");

describe("minSubArrayLen", () => {
  test("minSubArrayLen(7, [2,3,1,2,4,3]) should be 2", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  test("minSubArrayLen(4, [1,4,4]) should be 1", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });

  test("minSubArrayLen(11, [1,1,1,1,1,1,1,1]) should be 0", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });
});
