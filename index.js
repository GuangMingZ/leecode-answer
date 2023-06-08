console.log(1);

setTimeout(() => {
  console.log(6);
}, 0);

async function async1() {
  return new Promise((resolve, reject) => {
    console.log(2);
    resolve();
  });
}

async function async2() {
  await async1()
    .then(() => {
      console.log(3);
    })
    .catch(() => {
      console.log(4);
    });
  console.log(5);
}

async2();

let name = "张三";
const obj = {
  name: "李四",
  name2: this.name,
  age: 28,
  getName() {
    console.log(this.name);
  },
  getName2() {
    console.log(this.name2);
  },
  getAge() {
    console.log(this.age);
  },
};

const getNamePointer = obj.getName;
getNamePointer();

setTimeout(obj.getName, 100);
setTimeout(obj.getName2, 100);


