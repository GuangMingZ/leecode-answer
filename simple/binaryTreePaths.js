/**
 * 257. 二叉树的所有路径
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。
 *
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 *
 * 输入：root = [1]
 * 输出：["1"]
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  const reverseTree = (node, path) => {
    if (!node.left && !node.right) {
      const finalPath = path.concat([node.val]);
      res.push(finalPath.join("->"));
      return;
    }
    if (node.left) {
      reverseTree(node.left, [...path, node.val]);
    }
    if (node.right) {
      reverseTree(node.right, [...path, node.val]);
    }
  };
  if (!root) {
    return [];
  }
  reverseTree(root, []);
  return res;
};

// 广度遍历，效率更高
var binaryTreePaths = function (root) {
  const paths = [];
  if (root === null) {
    return paths;
  }
  const node_queue = [root];
  const path_queue = [root.val.toString()];

  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();

    if (node.left === null && node.right === null) {
      paths.push(path);
    } else {
      if (node.left !== null) {
        node_queue.push(node.left);
        path_queue.push(path + "->" + node.left.val.toString());
      }

      if (node.right !== null) {
        node_queue.push(node.right);
        path_queue.push(path + "->" + node.right.val.toString());
      }
    }
  }
  return paths;
};
