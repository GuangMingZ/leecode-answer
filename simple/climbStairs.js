/**
 * @param {number} n
 * @return {number}
 * 70. 爬楼梯
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let res = Array.from({ length: n }).map(() => 0);
  res[0] = 1;
  res[1] = 2;
  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n - 1];
};

/**
 * 70. 爬楼梯
 * @param {*} n 
 */
var climbStairs2 = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let oneStep = 2,
    twoStep = 1;
  let res = 0;
  for (let i = 3; i <= n; i++) {
    res = oneStep + twoStep;
    twoStep = oneStep;
    oneStep = res;
  }
  return res;
};

console.log(climbStairs2(4));
