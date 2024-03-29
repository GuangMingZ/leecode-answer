/**
 * 112. 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @param {number} targetSum
 * @return {boolean}
 */
const leafNodeSum = (node, sum = 0, targetVal = 0) => {
  if (!node) {
    return false;
  }
  if (node && !node.left && !node.right) {
    if (node.val + sum === targetVal) {
      return true;
    }
  }
  let hasPath = false;
  if (node.left) {
    hasPath = hasPath || leafNodeSum(node.left, sum + node.val, targetVal);
  }
  if (node.right) {
    hasPath = hasPath || leafNodeSum(node.right, sum + node.val, targetVal);
  }
  return hasPath;
};

var hasPathSum = function (root, targetSum) {
  return leafNodeSum(root, 0, targetSum);
};
