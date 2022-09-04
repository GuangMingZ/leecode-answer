/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]

示例 3：
输入：nums = [1]
输出：[[1]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

/**
 * 动态规划法,permute(nums) = permute(nums.pop()) x 循环中间插入
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 1) {
    return [nums];
  }
  let last = nums.pop();
  const prevRes = permute(nums);
  const res = [];
  prevRes.forEach((e) => {
    for (let i = 0, n = e.length; i <= n; i++) {
      const item = [...e];
      item.splice(i, 0, last);
      res.push(item);
    }
  });
  return res.reverse();
};

console.log(permute([2, 1, 3, 4]));
