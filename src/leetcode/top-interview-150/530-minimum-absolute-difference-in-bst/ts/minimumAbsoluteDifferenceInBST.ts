export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

export function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity;
  let prev = -1;

  function traverse(node: TreeNode | null) {
    if (!node) {
      return;
    }

    traverse(node.left);

    if (prev !== -1) {
      min = Math.min(min, node.val - prev);
    }

    prev = node.val;
    traverse(node.right);
  }

  traverse(root);

  return min === Infinity ? 0 : min;
}
