/**
 * 441. 排列硬币
 * @param {number} n
 * @return {number}
 * 
 * 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。

给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。

输入：n = 5
输出：2
解释：因为第三行不完整，所以返回 2 。

输入：n = 8
输出：3
解释：因为第四行不完整，所以返回 3 。
 */
var arrangeCoins = function (n) {
  if (n <= 0) {
    return 0;
  }
  let count = 1,
    sum = 1;
  while (sum < n) {
    count++;
    sum += count;
  }
  if (sum > n) {
    count--;
  }
  return count;
};
