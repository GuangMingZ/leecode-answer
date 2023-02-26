/**
 * 100. 相同的树
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

   如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var preorder = function (tree, res = []) {
  if (tree === null) {
    res.push(null);
    return res;
  }
  preorder(tree.left, res);
  res.push(tree.val);
  preorder(tree.right, res);
  return res;
};

var middleorder = function (tree, res = []) {
  if (tree === null) {
    res.push(null);
    return res;
  }
  res.push(tree.val);
  middleorder(tree.left, res);
  middleorder(tree.right, res);
  return res;
};

var isSameTree = function (p, q) {
  // 前序遍历
  const preorderValP = preorder(p, []);
  const preorderValQ = preorder(q, []);
  // 中序遍历
  const middleorderValP = middleorder(p, []);
  const middleorderValQ = middleorder(q, []);
  return (
    preorderValP.join(";") === preorderValQ.join(";") &&
    middleorderValP.join(";") === middleorderValQ.join(";")
  );
};
