import { TreeNode, getMinimumDifference } from './minimumAbsoluteDifferenceInBST';

describe('minimumAbsoluteDifferenceInBST', () => {
  test('should return 1 for [4, 2, 6, 1, 3]', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    expect(getMinimumDifference(root)).toEqual(1);
  });

  test('should return 1 for [1, 0, 48, null, null, 12, 49]', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(0);
    root.right = new TreeNode(48);
    root.right.left = new TreeNode(12);
    root.right.right = new TreeNode(49);
    expect(getMinimumDifference(root)).toEqual(1);
  });

  test('should return 1 for [1, null, 3, 2]', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(2);
    expect(getMinimumDifference(root)).toEqual(1);
  });

  test('should return 0 for a single node', () => {
    const root = new TreeNode(5);
    const result = getMinimumDifference(root);
    expect(result).toBe(0);
  });

  test('should return 0 for a null node', () => {
    const node = new TreeNode();
    expect(getMinimumDifference(node)).toBe(0);
  });

  test('should handle negative values', () => {
    const root = new TreeNode(
      -10,
      new TreeNode(-20),
      new TreeNode(-5),
    );
    const result = getMinimumDifference(root);
    expect(result).toBe(5);
  });
});
