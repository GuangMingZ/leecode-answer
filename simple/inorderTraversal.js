/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * 输入：root = [1,null,2,3]
   输出：[1,3,2]
   https://leetcode.cn/problems/binary-tree-inorder-traversal/
 */
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function inorder(node, arr) {
    if (!node) {
      return;
    }
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
  }
  const res = [];
  inorder(root, res);
  return res;
};

// 全局数组
var inorderTraversal1 = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
