/**
 * @param {string} s
 * @return {number}
 * 3. 无重复字符的最长子串
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  let charMap = new Map();
  let res = [];
  let len = 0;
  for (let i = 0, n = s.length; i < n; i++) {
    let char = s.charAt(i);
    res.push(char);
    while (charMap.has(char) && res.length) {
      charMap.delete(res.shift());
    }
    charMap.set(char, 1);
    len = res.length > len ? res.length : len;
  }
  return len;
};

console.log(lengthOfLongestSubstring("abcaabcedf"));
