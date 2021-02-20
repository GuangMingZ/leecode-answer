/**
 * @param {number[]} nums
 * @return {number}
 * 169. 多数元素
 * 使用投票法，不断切换候选者，最终遍历得到的候选者就是最终的众数
 */
var majorityElement = function (nums) {
  let candidate,
    count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else {
      if (num === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }
  return candidate;
};

console.log(majorityElement([3, 2, 3]));
