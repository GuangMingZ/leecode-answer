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

/**
 * 使用 简单的引用判断处理循环引用
 * @param {*} obj
 * @returns
 */
function deepClone1(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key) && obj !== obj[key]) {
      newObj[key] = deepClone1(obj[key]);
    } else if (obj === obj[key]) {
      newObj[key] = newObj;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/**
 * 使用 WeakMap 处理循环引用
 * @param {*} obj
 * @param {*} map
 * @returns
 */
function deepClone2(obj, map = new WeakMap()) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (map.get(obj)) {
    return map.get(obj);
  }
  let newObj = obj instanceof Array ? [] : {};
  map.set(obj, newObj);
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone2(obj[key], map);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let target = { a: "name", b: 12 };
target.self = target;
const clone = deepClone2(target);
console.log(target, clone === target);
console.log(clone.self === clone);

// const obj = {
//   a: 1,
//   b: 2,
// };
// obj.c = obj;
// console.log(deepClone1(obj));
