// K个一组反转数组元素
function reverseList(arr, k) {
    if (k <= 1) {
      return arr;
    }
    let count = 0,
      res = [],
      temp = [];
    for (let e of arr) {
      if (count >= k) {
        res.push(...temp.reverse());
        temp.splice(0, k);
        count = 0;
      }
      count++;
      temp.push(e);
    }
    if (temp.length) {
      res.push(...temp);
    }
    return res;
  }
  
  console.log(reverseList([1, 2, 3, 4, 5, 6, 7], 2));
  