import { TreeNode, rightSideView } from './binaryTreeRightSideView';

describe('binaryTreeRightSideView', () => {
  test('should return [1,3,4] for [1,2,3,null,5,null,4]', () => {
    const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test('should return [1,3] for [1,null,3]', () => {
    const root = new TreeNode(1, null, new TreeNode(3));
    expect(rightSideView(root)).toEqual([1, 3]);
  });

  test('should return [1, 2] for [1,2]', () => {
    const root = new TreeNode(1, new TreeNode(2));
    expect(rightSideView(root)).toEqual([1, 2]);
  });

  test('should return [0] for []', () => {
    const root = new TreeNode();
    expect(rightSideView(root)).toEqual([0]);
  });

  test('should return [] for null', () => {
    expect(rightSideView(null)).toEqual([]);
  });
});
