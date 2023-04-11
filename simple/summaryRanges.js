/**
 * 228. 汇总区间
 * 给定一个  无重复元素 的 有序 整数数组 nums 。

返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

列表中的每个区间范围 [a,b] 应该按如下格式输出：

"a->b" ，如果 a != b
"a" ，如果 a == b

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/summary-ranges
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例 1：

输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums?.length) {
    return [];
  }
  let start = nums[0],
    end = nums[0],
    res = [];
  for (let i = 1, n = nums.length; i < n; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      end = nums[i];
    } else {
      const item = start === end ? `${start}` : `${start}->${end}`;
      res.push(item);
      start = end = nums[i];
    }
  }
  const item = start === end ? `${start}` : `${start}->${end}`;
  res.push(item);
  return res;
};
