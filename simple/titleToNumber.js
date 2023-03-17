/**
 * 171. Excel 表列序号
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
 * 例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 

示例 1:

输入: columnTitle = "A"
输出: 1
 */
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  if (!columnTitle.length) {
    return 0;
  }
  const base = 26,
    subtract = 64;
  let res = 0;
  columnTitle
    .split("")
    .reverse()
    .forEach((v, i) => {
      res += (v.charCodeAt(0) - subtract) * Math.pow(base, i);
    });
  return res;
};

console.log(titleToNumber("AZ"));
