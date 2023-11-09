import { kidsWithCandies, kidsWithCandiesForLoops } from './kidsWithCandies';

const functionsToTest = [
  { fn: kidsWithCandies },
  { fn: kidsWithCandiesForLoops },
];

describe.each(functionsToTest)('%s', ({ fn }) => {
  test('should return [true,true,true,false,true] for candies = [2,3,5,1,3], extraCandies = 3', () => {
    expect(fn([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
  });

  test('should return [true,false,false,false,false] for candies = [4,2,1,1,2], extraCandies = 1', () => {
    expect(fn([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
  });

  test('should return [true,false,true] for candies = [12,1,12], extraCandies = 10', () => {
    expect(fn([12, 1, 12], 10)).toEqual([true, false, true]);
  });
});
