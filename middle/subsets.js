/**
 * 78. 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * https://leetcode.cn/problems/subsets/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */
// 思路: 生成000-111的二进制Map,然后进行解码,0表示没有该数字，1表示有该数字
var subsets = function (nums) {
  const len = Math.pow(2, nums.length);
  const res = [];
  for (let i = 0, n = len; i < n; i++) {
    let start = 0,
      flag = i;
    const item = [];
    while (start < nums.length) {
      if ((flag & 1) === 1) {
        item.push(nums[start]);
      }
      flag = flag >> 1;
      start++;
    }
    res.push(item);
  }
  return res;
};
