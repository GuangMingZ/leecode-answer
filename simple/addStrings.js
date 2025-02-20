/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0;
  const num1List = num1.split('');
  const num2List = num2.split('');
  let result = [];
  while (num1List.length && num2List.length) {
    const x = num1List.pop();
    const y = num2List.pop();
    const sum = Number(x) + Number(y) + carry;
    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);
    console.log(result)
  }
  if (num1List.length) {
    if (carry) {
      while (num1List.length) {
        const x = num1List.pop();
        const sum = Number(x) + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
      }
    } else {
      result = num1List.concat(result);
    }
  }
  if (num2List.length) {
    if (carry) {
      while (num2List.length) {
        const x = num2List.pop();
        const sum = Number(x) + carry;
        carry = Math.floor(sum / 10);
        result.unshift(sum % 10);
      }
    } else {
      result = num2List.concat(result);
    }
  }
  if (carry) {
    result.unshift(carry);
  }
  return result.join('');
};

console.log(addStrings("9333852702227987", "85731737104263"));
// console.log(addStrings("11", "123"));
// console.log(addStrings("456", "77"));
