/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0,
    equalCount = 0;
  for (let i = 0, n = t.length; i < n; i++) {
    if (equalCount >= s.length) {
      return true;
    }
    if (s.charAt(j) === t.charAt(i)) {
      j++;
      equalCount++;
    }
  }
  if (equalCount === s.length) {
    return true;
  }
  return false;
};

console.log(isSubsequence("ac", "bac"));
