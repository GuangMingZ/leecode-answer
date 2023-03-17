/**
 * 119. 杨辉三角 II
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
示例 1:

输入: rowIndex = 3
输出: [1,3,3,1]
示例 2:

输入: rowIndex = 0
输出: [1]

https://leetcode.cn/problems/pascals-triangle-ii/
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }
  let row = [1, 1],
    start = 2;
  while (start <= rowIndex) {
    row.unshift(0);
    for (let i = 0, n = start; i <= n; i++) {
      const leftTop = row[i] ?? 0;
      const rightTop = row[i + 1] ?? 0;
      row[i] = leftTop + rightTop;
    }
    start++;
  }
  return row;
};

console.log(getRow(9));
