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
 * @return {TreeNode}
 * 226. 翻转二叉树
 */
// 层次序遍历二叉树
var reverseTree = function (root, nodes) {
  if (!root) {
    return;
  } else {
    nodes.push(root);
    reverseTree(root.left, nodes);
    reverseTree(root.right, nodes);
  }
};
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  let nodes = [];
  reverseTree(root, nodes);
  while (nodes.length > 0) {
    let node = nodes.pop();
    if (node) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
  }
  return root;
};

// 使用
var invertTree2 = function (root) {
  if (root === null) {
    return null;
  }
  const left = invertTree2(root.left);
  const right = invertTree2(root.right);
  root.left = right;
  root.right = left;
  return root;
};
