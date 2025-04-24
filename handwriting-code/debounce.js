// 手写防抖
// 思路:在规定时间内未触发第二次，则执行
function debounce(fn, delay) {
  // 利用闭包保存定时器
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    // 在规定时间内再次触发会先清除定时器后再重设定时器
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, arg);
    }, delay);
  };
}

function fn() {
  console.log("防抖");
}
// addEventListener("scroll", debounce(fn, 1000));

function myDebounce(fn, delay) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function myThrottle(fn, delay) {
  let prev = Date.now();
  return function (...args) {
    const context = this;
    if (Date.now() - prev < delay) {
      return;
    }
    prev = Date.now();
    fn.apply(context, args);
  };
}

/**
 * 没有办法处理循环引用问题
 * @param {*} obj
 * @returns
 */
function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
