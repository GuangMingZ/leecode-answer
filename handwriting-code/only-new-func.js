// 方式一
function Person(name) {
  if (!new.target) {
    throw new SyntaxError("is only use new");
  }
  this.name = name;
}

// 方式二
function Person(name) {
  if (this instanceof Person) {
    this.name = name;
  } else {
    throw new SyntaxError("is only use new");
  }
}

// Person("gm");
let a = new Person("gm");
console.log(a.name);
