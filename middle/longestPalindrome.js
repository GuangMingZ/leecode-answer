/**
 * @param {string} s
 * @return {string}
 * 5. 最长回文子串
 */
// 中心突破法
var longestPalindrome = function (s) {
  if (!s || (s && s.length === 1)) {
    return s;
  }
  let res = "";
  let top = 0,
    end = 0;
  for (let i = 0, n = s.length; i < n; i++) {
    top = end = i;
    // 向前找到相同的char
    while (s.charAt(end + 1) === s.charAt(i)) {
      end++;
      res = end - top + 1 > res.length ? s.slice(top, end + 1) : res;
    }
    // i重新定位
    i = end;
    // 向两边拓展
    while (top >= 0 && end < n) {
      if (s.charAt(top) === s.charAt(end)) {
        res = end - top + 1 > res.length ? s.slice(top, end + 1) : res;
        top--;
        end++;
      } else {
        break;
      }
    }
  }
  return res;
};

var longestPalindrome = function (s) {

}

console.log(longestPalindrome("babad"));
