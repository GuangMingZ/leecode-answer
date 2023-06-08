/**
 * 268. 丢失的数字
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

示例 1：

输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 2：

输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/missing-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sum = nums.reduce((s, v) => {
    return s + v;
  }, 0);
  const n = nums.length;
  const sum2 = n * Math.ceil(n / 2) + Math.ceil(n / 2) * ((n + 1) % 2);
  return sum2 - sum;
};

console.log(missingNumber([3, 0, 1, 2, 4]));
