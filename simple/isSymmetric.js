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
 * @return {boolean}
 * 101. 对称二叉树
 */
let firstOrderTree = function (root, res) {
  if (root) {
    res.push(root.val);
    firstOrderTree(root.left, res);
    firstOrderTree(root.right, res);
  } else {
    res.push(null);
  }
};
let afterOrderTree = function (root, res) {
  if (root) {
    res.push(root.val);
    afterOrderTree(root.right, res);
    afterOrderTree(root.left, res);
  } else {
    res.push(null);
  }
};
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  let leftVal = [],
    rightVal = [];
  firstOrderTree(root.left, leftVal);
  afterOrderTree(root.right, rightVal);
  return leftVal.toString() === rightVal.toString();
};

// 对称二叉树方法2
let check = function (left, right) {
  if (!left && !right) {
    return true;
  }
  if (!left || !right) {
    return false;
  }
  return (
    left.val === right.val &&
    check(left.left, right.right) &&
    check(left.right, right.left)
  );
};

/**
 * 101. 对称二叉树
 * @param {*} root 
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return check(root.left, root.right);
};
