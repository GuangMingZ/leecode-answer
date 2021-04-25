/**
 * 实现柯里化
 * 实现要点：柯里化函数接收到足够参数后，就会执行原函数，那么我们如何去确定何时达到足够的参数呢？
 * 柯里化函数需要记住你已经给过他的参数，如果没给的话，则默认为一个空数组。
 * 接下来每次调用的时候，需要检查参数是否给够，如果够了，则执行fn，没有的话则返回一个新的 curry 函数，将现有的参数塞给他。
 */
// 待柯里化处理的函数
let sum = (a, b, c, d) => {
  return a + b + c + d;
};

// 柯里化函数，返回一个被处理过的函数
let curry = (fn, ...arr) => {
  // arr 记录已有参数
  return (...args) => {
    // args 接收新参数
    if (fn.length <= [...arr, ...args].length) {
      // 参数够时，触发执行
      return fn(...arr, ...args);
    } else {
      // 继续添加参数
      return curry(fn, [...arr, ...args]);
    }
  };
};

var sumPlus = curry(sum);
sumPlus(1)(2)(3)(4);
sumPlus(1, 2)(3)(4);
sumPlus(1, 2, 3)(4);
