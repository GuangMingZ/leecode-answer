/**
 * 504. 七进制数
 * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
 * @param {number} num
 * @return {string}
 * 
 * 示例 1:

输入: num = 100
输出: "202"
示例 2:

输入: num = -7
输出: "-10"
 */
var convertToBase7 = function (num) {
  const isNegative = num < 0;
  num = Math.abs(num);
  if (!num) {
    return "0";
  }
  const result = [];
  while (num) {
    const remainder = num % 7;
    num = Math.floor(num / 7);
    result.unshift(remainder);
  }
  isNegative && result.unshift("-");
  return result.join("");
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
console.log(convertToBase7(0));
