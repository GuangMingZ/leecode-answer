/**
 * 35. 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length <= 0) {
    return 0;
  }
  let start = 0,
    end = nums.length - 1,
    idx = 0;
  while (start <= end) {
    idx = Math.floor((start + end) / 2);
    if (nums[idx] === target) {
      return idx;
    } else if (nums[idx] > target) {
      end = idx - 1;
    } else if (nums[idx] < target) {
      start = idx + 1;
    }
  }
  return nums[idx] > target ? idx : idx + 1;
};
