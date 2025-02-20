/**
 * 
459. 重复的子字符串

给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

示例 1:

输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
示例 2:

输入: s = "aba"
输出: false
示例 3:

输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 * 
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length <= 1) {
    return false;
  }

  const maxStep = Math.floor(s.length / 2);
  let step = 1;
  let result = false;
  let mode = "";
  while (step <= maxStep) {
    mode = s.substring(0, step);
    const hasChar = s.split(mode).find((e) => !!e);
    if (!hasChar) {
      result = true;
      break;
    }
    step++;
    mode = "";
  }
  return result;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
console.log(repeatedSubstringPattern("aabaaba"));
