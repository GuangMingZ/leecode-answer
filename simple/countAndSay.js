/**
 * 给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-and-say
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

38. 外观数列
 */
/**
 * @param {number} n
 * @return {string}
 */
const cache = {
  1: "1",
  2: "11",
  3: "21",
  4: "1211",
  5: "111221",
};
var countAndSay = function (n) {
  if (cache[n]) {
    return cache[n];
  }
  let pre = "";
  if (cache[n - 1]) {
    pre = cache[n - 1];
  } else {
    pre = countAndSay(n - 1);
    cache[n - 1] = pre;
  }
  let res = "",
    char = pre[0],
    count = 1;
  for (let i = 1, n = pre.length; i < n; i++) {
    if (pre[i] === char) {
      count++;
    } else {
      res += count + "" + char;
      count = 1;
      char = pre[i];
    }
  }
  res += count + "" + char;
  cache[n] = res;
  return res;
};
