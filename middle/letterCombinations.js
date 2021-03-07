/**
 * @param {string} digits
 * @return {string[]}
 * 17. 电话号码的字母组合
 */
var combinations = function (cur, idx, digits, res, letterMap) {
  let digit = digits.charAt(idx);
  if (digit && letterMap.has(digit)) {
    let letters = letterMap.get(digit);
    for (let char of letters) {
      combinations(cur + char, idx + 1, digits, res, letterMap);
    }
  } else {
    res.push(cur);
  }
};
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  let charMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);
  let res = [],
    idx = 0;
  combinations("", idx, digits, res, charMap);
  return res;
};

/**
 * 方法二，采用频繁进栈、出栈
 * @param {*} digits 
 */
var letterCombinations1 = function (digits) {
  if (!digits) {
    return [];
  }
  let charMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);
  let res = [...charMap.get(digits.charAt(0))];
  for (let i = 1, n = digits.length; i < n; i++) {
    let letters = charMap.get(digits.charAt(i));
    if (!letters) {
      continue;
    }
    while (res[0].length - 1 < i) {
      let temp = res.shift();
      for (let letter of letters) {
        res.push(temp + letter);
      }
    }
  }
  return res;
};

console.log(letterCombinations1("23"));
