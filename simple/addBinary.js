/**
 * 67. 二进制求和
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 简单方法-存在数据越界
var addBinary = function (a, b) {
  return Number(parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

var addBinary = function (a, b) {
  const res = [];
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0;
  while (i >= 0 || j >= 0) {
    const currA = a[i] ? a[i] : 0;
    const currB = b[j] ? b[j] : 0;
    let sum = Number(currA) + Number(currB) + carry;
    carry = Math.floor(sum / 2);
    sum = sum % 2;
    res.unshift(sum);
    i--;
    j--;
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
};
