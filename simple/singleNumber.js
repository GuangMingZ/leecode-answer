/**
 * @param {number[]} nums
 * @return {number}
 * 136. 只出现一次的数字
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let map = new Map();
  for (let i = 0, n = nums.length; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let key of map.keys()) {
    if (map.get(key) === 1) {
      return key;
    }
  }
};

/**
 * 使用位运算求解
 * 异或操作
 * 任何数和 00 做异或运算，结果仍然是原来的数，即 a \oplus 0=aa⊕0=a。
   任何数和其自身做异或运算，结果是 00，即 a \oplus a=0a⊕a=0。
   异或运算满足交换律和结合律，即 a \oplus b \oplus a=b \oplus a \oplus a=b \oplus (a \oplus a)=b \oplus0=ba⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b
 * @param {*} nums 
 */
var singleNumber2 = function (nums) {
  let single = 0;
  for (let i = 0, n = nums.length; i < n; i++) {
    single ^= nums[i];
  }
  return single;
};

console.log(singleNumber2([2, 2, 1]));
