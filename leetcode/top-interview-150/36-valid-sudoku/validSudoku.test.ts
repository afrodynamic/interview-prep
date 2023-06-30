import { isValidSudoku } from './validSudoku';

describe('isValidSudoku', () => {
  test('should be true for a valid sudoku board', () => {
    const board = [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']];

    expect(isValidSudoku(board)).toBe(true);
  });

  test('should be false for a sudoku board with repeated values in a row', () => {
    const board = [
      ['.', '.', '.', '.', '1', '.', '.', '1', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.']];

    expect(isValidSudoku(board)).toBe(false);
  });

  test('should be false for a sudoku board with repeated values in a column', () => {
    const board = [
      ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.']];

    expect(isValidSudoku(board)).toBe(false);
  });

  test('should be false for a sudoku board with repeated values in a sub-box', () => {
    const board = [
      ['1', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '1', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.']];

    expect(isValidSudoku(board)).toBe(false);
  });

  test('should be false for an invalid sudoku board', () => {
    const board = [
      ['8','3','.','.','7','.','.','.','.'],
      ['6','.','.','1','9','5','.','.','.'],
      ['.','9','8','.','.','.','.','6','.'],
      ['8','.','.','.','6','.','.','.','3'],
      ['4','.','.','8','.','3','.','.','1'],
      ['7','.','.','.','2','.','.','.','6'],
      ['.','6','.','.','.','.','2','8','.'],
      ['.','.','.','4','1','9','.','.','5'],
      ['.','.','.','.','8','.','.','7','9']];

    expect(isValidSudoku(board)).toBe(false);
  });
});
