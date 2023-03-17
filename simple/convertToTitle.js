/**
 * 168. Excel表列名称
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/excel-sheet-column-title
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例 1：

输入：columnNumber = 1
输出："A"

示例 2：

输入：columnNumber = 28
输出："AB"
 * 
 */
/**
 * 和正常 0~25 的 26 进制相比，本质上就是每一位多加了 1。
 * 假设 A == 0，B == 1，那么 AB = 26 * 0 + 1 * 1，
 * 而现在 AB = 26 * (0 + 1) + 1 * (1 + 1)，
 * 所以只要在处理每一位的时候减 1，就可以按照正常的 26 进制来处理
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const charNumMap = new Map();
  const start = "A".charCodeAt(0) - 1;
  for (let i = 1, n = 26; i <= n; i++) {
    charNumMap.set(i, String.fromCharCode(start + i));
  }
  let num = columnNumber,
    charList = [],
    base = 26,
    hasM = false;
  while (num > base) {
    const char = hasM
      ? charNumMap.get((num % base) + 1)
      : charNumMap.get(num % base);
    // 修正刚好被整除的情况
    if (!char) {
      num = num - 1;
      hasM = true;
      continue;
    }
    charList.unshift(char);
    num = Math.floor(num / base);
  }
  if (num > 0) {
    charList.unshift(charNumMap.get(num));
  }
  return charList.join("");
};

console.log(convertToTitle(26 * 2));
