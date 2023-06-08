/**
 * 290. 单词规律
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

输入: pattern = "abba", s = "dog cat cat dog"
输出: true

输入:pattern = "abba", s = "dog cat cat fish"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/word-pattern
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (const [i, word] of words.entries()) {
    const ch = pattern[i];
    if (
      (word2ch.has(word) && word2ch.get(word) != ch) ||
      (ch2word.has(ch) && ch2word.get(ch) !== word)
    ) {
      return false;
    }
    word2ch.set(word, ch);
    ch2word.set(ch, word);
  }
  return true;
};
