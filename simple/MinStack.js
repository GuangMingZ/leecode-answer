/**
 * initialize your data structure here.
 * 155. 最小栈
 */
var MinStack = function () {
  this.res = [];
  this.min = Number.MAX_SAFE_INTEGER;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.min = Math.min(this.min, x);
  return this.res.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.res.pop();
  this.min = Math.min(...this.res);
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.res[this.res.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
