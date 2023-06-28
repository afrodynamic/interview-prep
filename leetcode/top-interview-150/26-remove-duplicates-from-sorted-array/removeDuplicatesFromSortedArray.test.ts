const { removeDuplicates } = require("./removeDuplicatesFromSortedArray");

describe("removeDuplicatesFromSortedArray", () => {
  test("removeDuplicates([1,1,2]) should be 2", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });

  test("removeDuplicates([0,0,1,1,1,2,2,3,3,4]) should be 5", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });

  test("removeDuplicates([1,2,3] should be 3", () => {
    expect(removeDuplicates([1, 2, 3])).toBe(3);
  });

  test("removeDuplicates([1,1,1] should be 1", () => {
    expect(removeDuplicates([1, 1, 1])).toBe(1);
  });

  test("removeDuplicates([]) should be 0", () => {
    expect(removeDuplicates([])).toBe(0);
  });
});
