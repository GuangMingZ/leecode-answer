/**
 * 两个大字符串相加
 * @param {*} str1
 * @param {*} str2
 */
var bigStringAdd = function (str1, str2) {
  if (!str1) {
    return str2;
  } else if (!str2) {
    return str1;
  }
  str1 = str1.split("").reverse().join("");
  str2 = str2.split("").reverse().join("");
  let n = Math.max(str1.length, str2.length);
  let carry = 0;
  let res = "";
  for (let i = 0; i < n; i++) {
    let add1 = Number(str1.charAt(i)) || 0;
    let add2 = Number(str2.charAt(i)) || 0;
    let sum = add1 + add2 + carry;
    res = sum % 10 + res;
    carry = Math.floor(sum / 10);
  }
  if (carry) {
    res = carry + res;
  }
  return res;
};

console.log(bigStringAdd("111199834343243244343111", "2343434322"));
