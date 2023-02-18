/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
    } else if (i === 1) {
      res.push([1, 1]);
    } else {
      const prev = res[i - 1];
      const temp = Array.from({ length: i + 1 }).map((v, idx) => {
        let sum = 0;
        if (prev[idx - 1]) {
          sum += prev[idx - 1];
        }
        if (prev[idx]) {
          sum += prev[idx];
        }
        return sum;
      });
      res.push(temp);
    }
  }
  return res;
};

console.log(generate(5));
