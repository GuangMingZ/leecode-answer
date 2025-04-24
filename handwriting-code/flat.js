/**
 * 首先数组扁平化方法
 * @param {*} level 扁平化的层级
 * @returns
 */
function flattern(level = 1) {
  let res = [...this];
  let loop = level;
  while (loop) {
    const temp = [];
    res.forEach((e) => {
      if (e instanceof Array) {
        temp.push(...e);
      } else {
        temp.push(e);
      }
    });
    res = temp;
    loop--;
  }
  return res;
}

Array.prototype.flattern = flattern;

const arr = [1, [2, 3], [4, [5, 6, [7, 8, 9]]]];
console.log(arr.flattern()); // output: [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.flattern(1)); // output: [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr.flattern(2)); // output: [1, 2, 3, 4, 5, 6, [7, 8, 9]];
console.log(arr.flattern(3)); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.flattern(4));
