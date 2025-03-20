/**
 * 507. 完美数
 * @param {number} num
 * @return {boolean}
 * 
 * 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。

对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。

 

示例 1：

输入：num = 28
输出：true
解释：28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, 和 14 是 28 的所有正因子。
示例 2：

输入：num = 7
输出：false

 */
var checkPerfectNumber = function (num) {
  if (num === 1) {
    return false;
  }
  const ceil = Math.floor(Math.sqrt(num));
  let temp = 2;
  const result = [1];
  while (temp <= ceil) {
    if (num % temp === 0) {
      result.push(...[temp, num / temp]);
    }
    temp++;
  }
  if (result.reduce((sum, val) => sum + val, 0) === num) {
    return true;
  }
  return false;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(1));
