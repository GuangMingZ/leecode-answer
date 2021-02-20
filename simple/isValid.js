/**
 * @param {string} s
 * @return {boolean}
 * 有效的括号
 */
var isValid = function (s) {
  let temp = [];
  let res = true;
  for (let i = 0, n = s.length; i < n; i++) {
    const char = s.charAt(i);
    if (["{", "[", "("].includes(char)) {
      temp.push(char);
    } else {
      const topChar = temp.pop();
      switch (char) {
        case "}":
          res = topChar === "{";
          break;
        case "]":
          res = topChar === "[";
          break;
        case ")":
          res = topChar === "(";
          break;
      }
    }
    if (!res) {
      break;
    }
  }
  return res && temp.length === 0;
};

console.log(isValid("(("));
