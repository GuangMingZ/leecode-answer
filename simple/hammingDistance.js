/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 461. 汉明距离
 */
var hammingDistance = function (x, y) {
  if (!x && !y) {
    return 0;
  }
  let count = 0;
  let remainX = 0,
    remainY = 0;
  while (x || y) {
    remainX = x % 2;
    remainY = y % 2;
    if ((remainX ^ remainY) === 1) {
      count++;
    }
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
  }
  return count;
};
