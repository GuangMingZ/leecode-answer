/**
 * 数组扁平化
 */

// ES6 的flat方法
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// toString
function flattenArray(arr) {
  return (arr = arr.toString().split(","));
}

// reduce
function flattenArray(arr) {
  if (!Array.isArray(arr)) return false;
  let res = arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flattenArray(cur) : cur);
  }, []);
  return res;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
