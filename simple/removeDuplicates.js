/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

26. 删除有序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || (nums && nums.length <= 0)) {
    return 0;
  }
  let n = nums.length - 1;
  while (n > 0) {
    let pre = n - 1;
    if (nums[pre] === nums[n]) {
      nums.splice(n, 1);
    }
    n--;
  }
  return nums.length;
};

var removeDuplicates = function (nums) {
  if (!nums || (nums && nums.length <= 0)) {
    return 0;
  }
  let slow = 0,
    fast = 1,
    n = nums.length;
  while (fast < n) {
    if (nums[fast] === nums[slow]) {
      fast++;
    } else {
      nums[++slow] = nums[fast];
    }
  }
  return slow + 1;
};
