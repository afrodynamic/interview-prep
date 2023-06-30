export function isValidSudoku(board: string[][]): boolean {
  const validateRow = (row: number): boolean => {
    const seen = new Set();

    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];

      if (cell === ".") {
        continue;
      }

      if (seen.has(cell)) {
        return false;
      }

      seen.add(cell);
    }

    return true;
  }

  const validateCol = (col: number): boolean => {
    const seen = new Set();

    for (let row = 0; row < 9; row++) {
      const cell = board[row][col];

      if (cell === ".") {
        continue;
      }

      if (seen.has(cell)) {
        return false;
      }

      seen.add(cell);
    }

    return true;
  }

  const validateBox = (row: number, col: number): boolean => {
    const seen = new Set();

    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        const cell = board[i][j];

        if (cell === ".") {
          continue;
        }

        if (seen.has(cell)) {
          return false;
        }

        seen.add(cell);
      }
    }

    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (!validateRow(i)) {
      return false;
    }

    if (!validateCol(i)) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!validateBox(i, j)) {
        return false;
      }
    }
  }

  return true;
};
