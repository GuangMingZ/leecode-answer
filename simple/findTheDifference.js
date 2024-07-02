/**
 * 389. 找不同
 * @param {string} s
 * @param {string} t
 * @return {character}
 * https://leetcode.cn/problems/find-the-difference/description/
 */
var findTheDifference = function (s, t) {
  const charMap = new Map();
  t.split("").forEach((char) => {
    const count = charMap.get(char) ?? 0;
    charMap.set(char, count + 1);
  });
  Array.from(s).forEach((char) => {
    const num = charMap.get(char);
    charMap.set(char, num - 1);
  });
  let res;
  charMap.forEach((val, key) => {
    if (val === 1) {
      res = key;
    }
  });
  return res;
};

console.log(findTheDifference('dadad','adadad'))
