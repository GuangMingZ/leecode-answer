/**
 * 500. 键盘行
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

请注意，字符串 不区分大小写，相同字母的大小写形式都被视为在同一行。

美式键盘 中：

第一行由字符 "qwertyuiop" 组成。
第二行由字符 "asdfghjkl" 组成。
第三行由字符 "zxcvbnm" 组成。

示例 1：

输入：words = ["Hello","Alaska","Dad","Peace"]

输出：["Alaska","Dad"]

解释：

由于不区分大小写，"a" 和 "A" 都在美式键盘的第二行。

示例 2：

输入：words = ["omk"]

输出：[]

示例 3：

输入：words = ["adsdf","sfd"]

输出：["adsdf","sfd"]

 */

function findWords(words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  return words.filter((word) => {
    const lowerWord = word.toLowerCase();
    const chars = [...lowerWord];
    let target = row1;
    if (row1.has(chars[0])) {
      target = row1;
    } else if (row2.has(chars[0])) {
      target = row2;
    } else {
      target = row3;
    }
    return chars.every((char) => target.has(char));
  });
}

// 方法2——遍历三个Set，时间复杂度更高
function findWords(words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  return words.filter((word) => {
    const lowerWord = word.toLowerCase();
    const chars = [...lowerWord];

    return [row1, row2, row3].some((row) => chars.every((c) => row.has(c)));
  });
}
