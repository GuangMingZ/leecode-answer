/**
 * 263. 丑数
 * 丑数 就是只包含质因数 2、3 和 5 的正整数。

给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

示例 1：

输入：n = 6
输出：true
解释：6 = 2 × 3
示例 2：

输入：n = 1
输出：true
解释：1 没有质因数，因此它的全部质因数是 {2, 3, 5} 的空集。习惯上将其视作第一个丑数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/ugly-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 为判断 n 是否满足上述形式，可以对 n 反复除以 2,3,5, 直到 n 不再包含质因数 
2,3,5。若剩下的数等于 1，则说明 n 不包含其他质因数，是丑数；否则，说明 n 包含其他质因数，
不是丑数。
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  const factors = [2, 3, 5];
  for (const factor of factors) {
    while (n % factor === 0) {
      n /= factor;
    }
  }
  return n == 1;
};

// 方法二，数子分析法
var isUgly = function (n) {
  const legalDigit = new Set([1, 2, 3, 4, 5, 6, 8, 9]);
  while (n >= 10) {
    const singleDigit = n % 10;
    switch (singleDigit) {
      case 0:
      case 5:
        n = n / 5;
        break;
      case 2:
      case 4:
      case 8:
        n = n / 2;
        break;
      case 1:
      case 3:
      case 7:
      case 9:
        n = n / 3;
        break;
      case 6: {
        const temp1 = n / 3;
        const temp2 = n / 2;
        if (Number.isInteger(temp1)) {
          n = temp1;
        } else {
          n = temp2;
        }
        break;
      }
      default:
        return false;
    }
    if (!Number.isInteger(n)) {
      return false;
    }
  }
  return legalDigit.has(n);
};

console.log(isUgly(27));
