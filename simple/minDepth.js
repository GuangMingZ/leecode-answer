/**
 * 111. 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
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
 * 深度遍历-返回minDepth
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  const leafDepth = (node, depth = 0) => {
    if (!node) {
      return 0;
    }
    if (node && !node.left && !node.right) {
      return depth + 1;
    }
    let leftLeafDepth = Number.MAX_SAFE_INTEGER,
      rightLeafDepth = Number.MAX_SAFE_INTEGER;
    if (node.left) {
      leftLeafDepth = leafDepth(node.left, depth);
    }
    if (node.right) {
      rightLeafDepth = leafDepth(node.right, depth);
    }
    return Math.min(leftLeafDepth, rightLeafDepth) + 1;
  };
  return leafDepth(root);
};

// 深度遍历-不断更新minDepth
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let minDepth = Number.MAX_SAFE_INTEGER;
  const leafDepth = (node, depth = 0) => {
    if (!node) {
      return;
    }
    if (node && !node.left && !node.right) {
      minDepth = Math.min(depth + 1, minDepth);
      return;
    }
    if (node.left) {
      leafDepth(node.left, depth + 1);
    }
    if (node.right) {
      leafDepth(node.right, depth + 1);
    }
  };
  leafDepth(root);
  return minDepth;
};
