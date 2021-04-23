/**
 * @param {number} n
 * @return {string[]}
 * 22. 括号生成
 */
var generateParenthesis = function (n) {
  if (!n) {
    return [];
  }
  let leftParenth = Array.from({ length: n }).map((e) => {
      return "(";
    }),
    rightParenth = Array.from({ length: n }).map((e) => {
      return ")";
    });
  let res = "";
  while (leftParenth.length) {
    let leftP = leftParenth.pop();
    
  }
};
