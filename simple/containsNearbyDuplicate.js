/**
 * 219. 存在重复元素 II
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/contains-duplicate-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例 1：

输入：nums = [1,2,3,1], k = 3
输出：true

示例 2：

输入：nums = [1,0,1,1], k = 1
输出：true
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numMap = new Map();
  for (let i = 0, n = nums.length; i < n; i++) {
    if (numMap.has(nums[i])) {
      const idxList = numMap.get(nums[i]);
      let res = false;
      idxList.forEach((v) => {
        if (Math.abs(i - v) <= k) {
          res = true;
        }
      });
      if (res) {
        return res;
      } else {
        idxList.push(i);
      }
    } else {
      numMap.set(nums[i], [i]);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
