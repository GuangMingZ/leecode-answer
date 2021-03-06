// 实现手写节流
// 思路：在规定时间内只触发一次
function throttle(fn, delay) {
  // 利用闭包保存时间
  let prev = Date.now();
  return function () {
    let context = this;
    let arg = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, arg);
      prev = Date.now();
    }
  };
}

function fn() {
  console.log("节流");
}
addEventListener("scroll", throttle(fn, 1000));
