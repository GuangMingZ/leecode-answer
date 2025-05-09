/**
 * 434. 字符串中的单词数
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。

 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s?.split(' ').filter(e => !!e).length ?? 0
};

console.log(countSegments('Hello, my name is John'))
console.log(countSegments('Hello'))