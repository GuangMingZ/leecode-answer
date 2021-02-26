/**
 * @param {number[]} height
 * @return {number}
 * 11. 盛最多水的容器
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
