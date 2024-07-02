/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  function calcSum(node, direction) {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right && direction === "left") {
      return node.val;
    }
    return calcSum(node.left, "left") + calcSum(node.right, "right");
  }
  return calcSum(root);
};

var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const dfs = (root, isLeft) => {
    if (!root) return;
    if (!root.left && !root.right && isLeft) sum += root.val;
    dfs(root.left, true);
    dfs(root.right);
  };
  dfs(root);
  return sum;
};
