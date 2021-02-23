/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * 617. 合并二叉树
 */
// 递归法
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) {
    return root1;
  } else if (!root1) {
    return root2;
  } else if (!root2) {
    return root1;
  }
  let left = mergeTrees(root1.left, root2.left);
  let right = mergeTrees(root1.right, root2.right);
  let newRoot = new TreeNode(root1.val + root2.val, left, right);
  return newRoot;
};

// 迭代法
var mergeTrees = function (root1, root2) {
    
}