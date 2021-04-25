// 实现对象深拷贝
// 递归拷贝-不能有循环依赖
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return copy;
}

// 深度拷贝-可以有循环依赖
function deepClone1(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== obj) {
        copy[key] = deepClone(obj[key]);
      } else {
        copy[key] = obj[key];
      }
    }
  }
  return copy;
}

const obj = {
  a: 1,
  b: 2,
};
obj.c = obj;
console.log(deepClone1(obj));
