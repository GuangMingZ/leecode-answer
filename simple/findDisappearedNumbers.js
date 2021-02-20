/**
 * @param {number[]} nums
 * @return {number[]}
 * 448. 找到所有数组中消失的数字
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  let numMap = new Map();
  for (let i = 0, n = nums.length; i < n; i++) {
    numMap.set(nums[i], 1);
  }
  for (let i = 0, n = nums.length; i < n; i++) {
    if (!numMap.has(i + 1)) {
      res.push(i + 1);
    }
  }
  return res;
};

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0, n = nums.length; i < n; i++) {
    let newIdx = Math.abs(nums[i]) - 1;
    nums[newIdx] = -1 * Math.abs(nums[newIdx]);
  }
//   console.log(nums);
  for (let i = 0, n = nums.length; i < n; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
