/**
 * 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 *
 * 示例 2：
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
var preorderTraversal = function (root) {
  const traversal = (node, res = []) => {
    if (node === null) {
      return res;
    }
    res.push(node.val);
    traversal(node.left, res);
    traversal(node.right, res);
    return res;
  };
  return traversal(root);
};

// 非递归，迭代式
var preorderTraversal = function (root) {
  const res = [],
    nodeArr = [];
  let pointer = root;
  while (pointer || nodeArr.length) {
    if (!pointer) {
      pointer = nodeArr.pop();
    }
    res.push(pointer.val);
    // 暂存右节点
    if (pointer.right) {
      nodeArr.push(pointer.right);
    }
    // 遍历左子树
    pointer = pointer.left;
  }
  return res;
};
