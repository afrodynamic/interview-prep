export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let flowersPlaced = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowersPlaced >= n) {
      return true;
    }

    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      flowersPlaced++;
      i++;
    }
  }

  return flowersPlaced >= n;
};
