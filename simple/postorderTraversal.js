/**
 * 145. 二叉树的后序遍历
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 *
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 *
 * 输入：root = []
 * 输出：[]
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
var postorderTraversal = function (root) {
  const traversal = (node, res = []) => {
    if (node === null) {
      return res;
    }
    traversal(node.left, res);
    traversal(node.right, res);
    res.push(node.val);
    return res;
  };
  return traversal(root);
};

var postorderTraversal = function (root) {
  const res = [],
    nodeArr = [];
  let prev = null;
  while (root || nodeArr.length) {
    while (root) {
      nodeArr.push(root);
      root = root.left;
    }
    root = nodeArr.pop();
    if (!root.right || root.right === prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      nodeArr.push(root);
      root = root.right;
    }
  }
  return res;
};
