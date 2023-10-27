class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const BSTtoArray = (root: TreeNode | null): (number | null)[] => {
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left, node.right);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
};

export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);

  const leftHalf = nums.slice(0, mid);

  const rightHalf = nums.slice(mid + 1);

  return new TreeNode(
    nums[mid],
    sortedArrayToBST(leftHalf),
    sortedArrayToBST(rightHalf)
  );
};
