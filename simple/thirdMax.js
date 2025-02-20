/**
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 * 示例 1：

输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。

 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sortNums = nums.sort((a, b) => b - a);
  let max = sortNums.shift(),
    count = 1,
    temp = max;
  while (count < 3 && sortNums.length > 0) {
    const num = sortNums.shift();
    if (num !== temp) {
      count++;
    }
    temp = num;
  }
  return count >= 3 ? temp : max;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 1]));
console.log(thirdMax([3, 2, 2, 1, 5, 6, 7]));
