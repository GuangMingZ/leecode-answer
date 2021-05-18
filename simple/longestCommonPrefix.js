/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * 14. 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "",
    flag = strs[0],
    stop = false;
  for (let i = 0, n = flag.length; i < n; i++) {
    for (let j = 1, k = strs.length; j < k; j++) {
      if (strs[j][i] !== flag[i]) {
        stop = true;
        break;
      }
    }
    if (stop) {
      break;
    } else {
      res += flag[i];
    }
  }
  return res;
};
