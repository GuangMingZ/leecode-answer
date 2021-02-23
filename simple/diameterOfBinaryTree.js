/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 543. 二叉树的直径
 */
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  const getTreeHeight = function (node) {
    if (!node) {
      return 0;
    }
    return Math.max(getTreeHeight(node.left), getTreeHeight(node.right)) + 1;
  };
  let diameterLeft = diameterOfBinaryTree(root.left);
  let diameterRight = diameterOfBinaryTree(root.right);
  let diameterRoot = Math.max(
    getTreeHeight(root.left) + getTreeHeight(root.right)
  );
  return Math.max(diameterLeft, diameterRight, diameterRoot);
};

// var diameterOfBinaryTree = function (root) {
//   const maxDepth = function (node) {
//     if (!node) {
//       return 0;
//     }
//     let leftDepth = maxDepth(node.left);
//     let rightDepth = maxDepth(node.right);
//     if (leftDepth === 0 && rightDepth === 0) {
//       return 0;
//     } else {
//       return Math.max(leftDepth, rightDepth) + 1;
//     }
//   };
//   if (!root || (!root.left && !root.right)) {
//     return 0;
//   }
//   return maxDepth(root);
// };
