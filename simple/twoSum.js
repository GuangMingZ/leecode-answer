/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 两数之和
 */
// var twoSum = function (nums, target) {
//   if (!nums || nums.length === 0) {
//     return [];
//   }
//   let res = [];
//   for (let i = 0, n = nums.length; i < n; i++) {
//     res[0] = i;
//     let differ = target - nums[i];
//     const idx = nums.indexOf(differ, i + 1);
//     if (idx > -1) {
//       res[1] = idx;
//       break;
//     }
//   }
//   return res;
// };
/**
 * 两数之和
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum = function (nums, target) {
  let numMap = new Map();
  let res= [];
  for (let i = 0, n = nums.length; i < n; i++) {
    let differ = target - nums[i];
    res[0] = i;
    if (numMap.has(differ)) {
      res[1] = numMap.get(differ);
      break;
    } else {
      numMap.set(nums[i], i);
    }
  }
  return res;
};

console.log(twoSum([2, 7, 11, 15], 9));
