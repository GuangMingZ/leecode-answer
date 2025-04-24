/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 88. 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 正向遍历两个数组，逐个插入
var merge2 = function (nums1, m, nums2, n) {
  if (n <= 0) {
    return;
  }
  let num1Idx = 0,
    num2Idx = 0;
  while (num1Idx < m + n && num2Idx < n) {
    const temp = nums1[num1Idx];
    if (temp > nums2[num2Idx]) {
      nums1.splice(num1Idx, 1, nums2[num2Idx], temp);
      num2Idx++;
    }
    num1Idx++;
  }
  if (num2Idx < n) {
    nums1.splice(m + num2Idx, 0, ...nums2.slice(num2Idx));
  }
  nums1.splice(m + n);
  return nums1;
};

// 先合并，再排序
var merge1 = function (nums1, m, nums2, n) {
  if (n <= 0) {
    return;
  }
  nums1.splice(m, n);
  nums2.forEach((e) => {
    nums1.push(e);
  });
  nums1.sort((a, b) => a - b);
  return nums1;
};

/**
 * 从后往前逆向遍历插入，时间复杂度更低
 * @param {*} nums1
 * @param {*} m
 * @param {*} nums2
 * @param {*} n
 */
var merge = function (nums1, m, nums2, n) {
  let index = m + n - 1;
  m--;
  n--;
  while (m >= 0 || n >= 0) {
    const num1 = nums1[m] ?? Number.NEGATIVE_INFINITY;
    const num2 = nums2[n] ?? Number.NEGATIVE_INFINITY;
    if (num1 > num2) {
      nums1[index] = num1;
      m--;
    } else {
      nums1[index] = num2;
      n--;
    }
    index--;
  }
  return nums1;
};

console.time();
console.log(merge2([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.timeEnd();

console.time();
console.log(merge1([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
console.log(merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.timeEnd();

console.time();
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.timeEnd();
