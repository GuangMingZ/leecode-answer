function debounce(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("fn must be function");
  }
  let timer = null;
  return function timerCall() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("fn must be function");
  }
  let timer = Date.now();
  return function timerCall() {
    const context = this;
    const args = arguments;
    const current = Date.now();
    if (current - timer < delay) {
      return;
    }
    timer = current;
    fn.apply(context, args);
  };
}
