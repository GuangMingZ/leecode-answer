/**
 * 409. 最长回文串
 * 
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的 
回文串
 的长度。

在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

示例 1:

输入:s = "abccccdd"
输出:7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

思路：只需要计算回文长度，无需得到最终的回文串
     还是以中心突破法，选择一个出现奇数的字符作为中心字符，然后统计为偶数的字符
     逐步减少字符串长度，直到没有偶数出现的字符
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  const countMap = new Map();
  const keyList = [];
  for (let i = 0, n = s.length; i < n; i++) {
    const key = s[i];
    if (countMap.has(key)) {
      const oldValue = countMap.get(key);
      countMap.set(key, oldValue + 1);
    } else {
      countMap.set(key, 1);
      keyList.push(key);
    }
  }
  let res = 0;
  keyList.forEach((key) => {
    let count = countMap.get(key);
    while (count > 1) {
      count -= 2;
      res += 2;
    }
    // 还剩一个没用，存入map
    if (count > 0) {
      countMap.set(key, count);
    } else {
      // 已经用光了，删除key
      countMap.delete(key);
    }
  });
  return countMap.size > 0 ? res + 1 : res;
};

console.log(longestPalindrome("bcbc"));
