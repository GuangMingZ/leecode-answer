/**
 * 205. 同构字符串
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/isomorphic-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入：s = "egg", t = "add"
输出：true

输入：s = "foo", t = "bar"
输出：false

输入：s = "paper", t = "title"
输出：true
 */
/** 
 * 维护一个双映射关系
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sCharMap = new Map();
  const tCharMap = new Map();
  for (let i = 0, n = s.length; i < n; i++) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);
    if (sCharMap.has(sChar)) {
      if (sCharMap.get(sChar) !== tChar) {
        return false;
      }
    } else {
      sCharMap.set(sChar, tChar);
    }
    if (tCharMap.has(tChar)) {
      if (tCharMap.get(tChar) !== sChar) {
        return false;
      }
    } else {
      tCharMap.set(tChar, sChar);
    }
  }
  return true;
};
