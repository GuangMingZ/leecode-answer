/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 501. 二叉搜索树中的众数
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 任意顺序 返回。

假定 BST 满足如下定义：

结点左子树中所含节点的值 小于等于 当前节点的值
结点右子树中所含节点的值 大于等于 当前节点的值
左子树和右子树都是二叉搜索树
 */
var findMode = function (root) {
  const valMap = new Map();
  const reverseTree = function (node) {
    if (node) {
      const count = valMap.get(node.val) ?? 0;
      valMap.set(node.val, count + 1);
      reverseTree(node.left);
      reverseTree(node.right);
    }
  };
  reverseTree(root);
  const max = Math.max(...Array.from(valMap.values()));
  const result = [];
  valMap.forEach((value, key) => {
    if (value === max) {
      result.push(key);
    }
  });
  return result;
};

/**
 * 因为这棵树的中序遍历是一个有序的序列，所以我们可以先获得这棵树的中序遍历，然后从扫描这个中序遍历序列
 * 这样一颗二叉搜索树的中序遍历序列是 {−1,0,0,1,2,2}。我们可以发现重复出现的数字一定是一个连续出现的，
 * 例如这里的 0 和 2，它们都重复出现了，并且所有的 0 都集中在一个连续的段内，
 * 所有的 2 也集中在一个连续的段内。我们可以顺序扫描中序遍历序列，用 base 记录当前的数字，
 * 用 count 记录当前数字重复的次数，用 maxCount 来维护已经扫描过的数当中出现最多的那个数字的出现次数，
 * 用 answer 数组记录出现的众数。每次扫描到一个新的元素：
 */
var findMode = function (root) {
  let base = 0,
    count = 0,
    maxCount = 0;
  let answer = [];

  const update = (x) => {
    if (x === base) {
      ++count;
    } else {
      count = 1;
      base = x;
    }
    if (count === maxCount) {
      answer.push(base);
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  };

  const dfs = (o) => {
    if (!o) {
      return;
    }
    dfs(o.left);
    update(o.val);
    dfs(o.right);
  };

  dfs(root);
  return answer;
};
