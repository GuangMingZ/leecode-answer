/**
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  // 找到第一对升序的相邻组合
  let maxMinIdx = -1;
  for (let i = 0, n = nums.length - 1; i < n; i++) {
    if (nums[i] < nums[i + 1]) {
      maxMinIdx = i;
    }
  }
  // 找不到说明是完全降序，直接反转数组
  if (maxMinIdx === -1) {
    return nums.reverse();
  }
  // 在后序数组中找到最小的却比nums[maxMinIdx]大的数
  let minMaxIdx = -1,
    max = nums[maxMinIdx];
  for (let i = nums.length - 1; i > maxMinIdx; i--) {
    if (nums[i] > max) {
      minMaxIdx = i;
      break;
    }
  }
  // 交换值
  [nums[maxMinIdx], nums[minMaxIdx]] = [nums[minMaxIdx], nums[maxMinIdx]];
  let start = maxMinIdx + 1,
    end = nums.length - 1;
  // 反转后序数组
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  return nums;
};

console.log(nextPermutation([1, 3, 2]));
