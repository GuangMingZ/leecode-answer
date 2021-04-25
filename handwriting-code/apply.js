// 手写apply
function apply(context, args) {
  if (!this || typeof this !== "function") {
    throw new TypeError("context is must be Function");
  }
  context = context || window;
  context.fn = this;
  let res = null;
  if (args && args.length) {
    res = context.fn(...args);
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
}

Function.prototype.myapply = apply;

function Person(name, age) {
  console.log("name = ", name);
  console.log("age = ", age);
}

let test = {};

Person.myapply(test, ["gm", 27]);
