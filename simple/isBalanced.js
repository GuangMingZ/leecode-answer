/**
 * 110. 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：true
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const treeDeep = (node) => {
    if (!node) {
      return 0;
    }
    return Math.max(treeDeep(node.left), treeDeep(node.right)) + 1;
  };
  if (!root) {
    return true;
  }
  const leftDeep = treeDeep(root.left);
  const rightDeep = treeDeep(root.right);
  const isBalance = Math.abs(leftDeep - rightDeep) <= 1;
  return isBalanced(root.left) && isBalanced(root.right) && isBalance;
};

/**
 * 自底向上递归的做法类似于后序遍历，对于当前遍历到的节点，先递归地判断其左右子树是否平衡，再判断以当前节点为根的子树是否平衡。
 * 如果一棵子树是平衡的，则返回其高度（高度一定是非负整数），否则返回 −1。如果存在一棵子树不平衡，则整个二叉树一定不平衡。

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/balanced-binary-tree/solution/ping-heng-er-cha-shu-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {*} root 
 * @returns 
 */
var isBalanced = function (root) {
  const height = (node) => {
    if (!node) {
      return 0;
    }
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };
  return height(root) >= 0;
};
