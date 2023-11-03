export const mySqrt = (x: number): number => {
  let guess = x;

  while (Math.floor(Math.abs(guess * guess - x)) > 0) {
    guess = (guess + x / guess) / 2;
  }

  return Math.floor(guess);
};
