/**
 * 342. 4的幂
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

示例 1：

输入：n = 16
输出：true
示例 2：

输入：n = 5
输出：false
示例 3：

输入：n = 1
输出：true

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/power-of-four
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n !== 0 && n % 4 === 0) {
    n = Math.floor(n / 4);
  }
  return n === 1;
};

/**
 * 思路与算法
我们可以通过 n 除以 3 的余数是否为 1 来判断 n 是否是 4 的幂。
 * @param {*} n 
 * @returns 
 */
var isPowerOfFour = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};


console.log(isPowerOfFour(16))