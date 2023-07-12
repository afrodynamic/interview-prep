export function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const target = n * n;

  const queue = [1];
  const visited = new Set<number>();
  visited.add(1);

  let moves = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const current = queue.shift()!;

      if (current === target) {
        return moves;
      }

      for (
        let next = current + 1;
        next <= Math.min(current + 6, target);
        next++
      ) {
        const [row, col] = getCoordinates(next, n);
        const num = board[row][col] === -1 ? next : board[row][col];

        if (!visited.has(num)) {
          visited.add(num);
          queue.push(num);
        }
      }
    }

    moves++;
  }

  return -1;
}

const getCoordinates = (square: number, n: number): [number, number] => {
  const row = Math.floor((square - 1) / n);
  const col = row % 2 === 0 ? (square - 1) % n : n - 1 - ((square - 1) % n);
  return [n - 1 - row, col];
};
