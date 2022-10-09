/**
 * @param {number} n
 * @return {string[]}
 * 22. 括号生成
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
