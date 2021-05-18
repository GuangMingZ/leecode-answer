/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * 7. 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  x = (x + "").split("").reverse().join("");
  if (x[x.length - 1] === "-") {
    x = "-" + x.substr(0, x.length - 1);
  }
  let res = Number(x);
  if (res >= Math.pow(2, 31) - 1 || res <= -Math.pow(2, 31)) {
    return 0;
  }
  return res || 0;
};

var reverse = function (x) {
  let rev = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10); // 将右运算数转换为number类型
    rev = rev * 10 + digit;
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return rev;
};
