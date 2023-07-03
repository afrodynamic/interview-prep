import { TreeNode, maxDepth } from './maximumDepthOfBinaryTree';

describe('maximumDepthOfBinaryTree', () => {
  test('should return 3 for [3,9,20,null,null,15,7]', () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(maxDepth(root)).toBe(3);
  });

  test('should return 2 for [1,null,2]', () => {
    const root = new TreeNode(1, null, new TreeNode(2));
    expect(maxDepth(root)).toBe(2);
  });

  test('should return 1 for single node', () => {
    const root = new TreeNode();
    expect(maxDepth(root)).toBe(1);
  });

  test('should return 0 for null', () => {
    expect(maxDepth(null)).toBe(0);
  });
});
