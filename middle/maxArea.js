/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/container-with-most-water
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} height
 * @return {number}
 * 11. 盛最多水的容器
 * 两端向中间收敛
 */
var maxArea = function (height) {
  if (height.length < 2) {
    return 0;
  }
  let start = 0,
    end = height.length - 1,
    maxArea = 0;
  while (start <= end) {
    let curHeight = Math.min(height[start], height[end]);
    let width = end - start;
    let area = curHeight * width;
    maxArea = area > maxArea ? area : maxArea;
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return maxArea;
};
