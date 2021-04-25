// 实现浅拷贝
// 1. ...实现
function shallowCopy(obj) {
  return obj instanceof Array ? [...obj] : { ...obj };
}

// 2. Object.assign实现
function shallowCopy1(obj) {
  return obj instanceof Array ? Object.assign([], obj) : Object.assign({}, obj);
}

console.log(shallowCopy1([1, 23]));
console.log(shallowCopy1({ a: 1, b: 2 }));
