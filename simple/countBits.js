/**
 * 338. 比特位计数
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，
 * 返回一个长度为 n + 1 的数组 ans 作为答案。
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // 计算number二进制表示中1的个数
  const numberOf1 = (num) => {
    let count = 0;
    while (num) {
      count++;
      num = num & (num - 1);
    }
    return count;
  };
  return Array.from({ length: n + 1 })
    .map((v, i) => i)
    .map((e) => numberOf1(e));
};

// 根据奇偶特性解题

console.log(countBits(8));
