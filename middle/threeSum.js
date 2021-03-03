/**
 * @param {number[]} nums
 * @return {number[][]}
 * 15. 三数之和 
 */

var threeSum = function (nums) {
  let n = nums.length;
  nums.sort(function (a, b) {
    return a - b;
  });
  let ans = [];
  // 枚举 a
  for (let first = 0; first < n; ++first) {
    // 需要和上一次枚举的数不相同
    if (first > 0 && nums[first] == nums[first - 1]) {
      continue;
    }
    // c 对应的指针初始指向数组的最右端
    let third = n - 1;
    let target = -nums[first];
    // 枚举 b
    for (let second = first + 1; second < n; ++second) {
      // 需要和上一次枚举的数不相同
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      // 需要保证 b 的指针在 c 的指针的左侧
      while (second < third && nums[second] + nums[third] > target) {
        --third;
      }
      // 如果指针重合，随着 b 后续的增加
      // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
      if (second == third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        ans.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return ans;
};

var threeSum1 = function (nums) {
  if (!nums || !nums.length) {
    return [];
  }
  nums.sort(function (a, b) {
    return a - b;
  });
  let res = [];
  let resMap = new Map();
  for (let i = 0, n = nums.length - 2; i < n; i++) {
    for (let j = i + 1, k = nums.length - 1; j < k; j++) {
      for (let x = j + 1, y = nums.length; x < y; x++) {
        if (nums[i] + nums[j] + nums[x] === 0) {
          const temp = [nums[i], nums[j], nums[x]];
          if (!resMap.has(temp.join(","))) {
            res.push(temp);
            resMap.set(temp.join(","), true);
          }
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
