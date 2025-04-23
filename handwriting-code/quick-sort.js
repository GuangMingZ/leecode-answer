// 快速排序算法
function quickSort(arr) {
  if (arr?.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const middle = Math.floor(arr.length / 2);
  const pivot = arr.splice(middle, 1)[0];
  arr.forEach((e) => {
    if (e <= pivot) {
      left.push(e);
    } else {
      right.push(e);
    }
  });
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([3, 4, 5, 6, 22, 3, 4, 998, 33]));
