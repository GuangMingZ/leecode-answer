/**
 * 485. 最大连续 1 的个数
 * @param {number[]} nums
 * @return {number}
 * 
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

示例 1：

输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
示例 2:

输入：nums = [1,0,1,1,0,1]
输出：2

思路：双指针法
 */
var findMaxConsecutiveOnes = function (nums) {
  let start = 0,
    end = 0;
  const len = nums.length;
  let max = 0;
  while (end < len) {
    // 找到0
    while (end < len && nums[end] > 0) {
      end++;
    }
    max = Math.max(max, end - start);
    // 找到下一个1
    while (end < len && nums[end] < 1) {
      end++;
    }
    start = end;
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([0, 1, 1, 1, 1]));
