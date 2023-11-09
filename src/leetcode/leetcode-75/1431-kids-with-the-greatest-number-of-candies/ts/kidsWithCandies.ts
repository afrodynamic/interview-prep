export const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  const result: boolean[] = [];

  for (let i = 0; i < candies.length; i++) {
    const currentCandies = candies[i] + extraCandies;
    let isGreatest = true;

    for (let j = 0; j < candies.length; j++) {
      if (currentCandies < candies[j]) {
        isGreatest = false;
        break;
      }
    }

    result.push(isGreatest);
  }

  return result;
};
