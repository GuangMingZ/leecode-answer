/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 283. 移动零
 */
var moveZeroes = function (nums) {
  if (!nums || nums.length <= 0) {
    return;
  }
  let i = nums.length - 1,
    count = 0;
  for (; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
    }
  }
  let zero = Array.from({ length: count }).map(() => {
    return 0;
  });
  nums.push(...zero);
};

var moveZeroes = function (nums) {
  if (!nums || nums.length <= 0) {
    return;
  }
  let left = 0;
  while (nums[left] !== 0 && left < nums.length) {
    left++;
  }
  let right = left;
  while (right < nums.length) {
    while (right < nums.length && nums[right] === 0) {
      right++;
    }
    if (right >= nums.length) {
      break;
    }
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right++;
  }
};
