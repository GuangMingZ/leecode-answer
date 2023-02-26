/**
 * 58. 最后一个单词的长度
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

示例 1：

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/length-of-last-word
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s?.length) {
    return 0;
  }
  let end = s.length - 1;
  while (s[end] === " ") {
    end--;
  }
  let count = 0;
  while (end >= 0 && s[end] !== " ") {
    count++;
    end--;
  }
  return count;
};
