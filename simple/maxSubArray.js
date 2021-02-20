/**
 * @param {number[]} nums
 * @return {number}
 * 53. 最大子序和
 */
var maxSubArray = function (nums) {
  if (nums.length <= 0) {
    return 0;
  }
  let max = nums[0],
    pre = nums[0];
  for (let i = 1, n = nums.length; i < n; i++) {
    pre = Math.max(nums[i], nums[i] + pre);
    max = Math.max(pre, max);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
