function call(...args) {
  let [context, ...restArgs] = [...args];
  if (!this || typeof this !== "function") {
    throw new TypeError("context is must be Function");
  }
  context = context || window;
  context.fn = this;
  const res = context.fn(...restArgs);
  delete context.fn;
  return res;
}

Function.prototype.mycall = call;

function Person(name, age) {
  console.log("name = ", name);
  console.log("age = ", age);
}

let test = {};

Person.mycall(test, "gm", 27);
