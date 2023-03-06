/**
 * @param {number} n
 * @return {string[]}
 * 22. 括号生成
 * https://leetcode.cn/problems/generate-parentheses/
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 小括号组合。
 * 
 * 示例 1：
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */
var generateParenthesis = function (n) {
  const res = [];
  if (n <= 0) {
    return res;
  }
  dfs("", 0, 0, n, res);
  return res;
};

var dfs = function (curStr, left, right, n, res) {
  if (left === n && right === n) {
    res.push(curStr);
    return;
  }
  if (left < right) {
    return;
  }
  if (left < n) {
    dfs(curStr + "(", left + 1, right, n, res);
  }
  if (right < n) {
    dfs(curStr + ")", left, right + 1, n, res);
  }
};
