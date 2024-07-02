// 实现一个异步链式调用类 Person
// const person = new Person();
// person.say("hi").sleep(3000).say("world").sleep(1000).eat("apple");
class Person {
  innerTimer = new Promise((resolve) => {
    return resolve();
  });
  say(text) {
    this.innerTimer = this.innerTimer.then(() => {
      console.log(text);
    });
    return this;
  }
  sleep(timestamp) {
    const self = this;
    self.innerTimer = self.innerTimer.then(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, timestamp);
      });
    });
    console.timeEnd()
    return self;
  }
  eat(text) {
    this.innerTimer = this.innerTimer.then(() => {
      console.log(`eat ${text}`);
    });
    return this;
  }
}

// 实现一个异步链式调用类 Person
// 考虑尽可能通用的实现
const person = new Person();
person.say("hi").sleep(3000).say("world").sleep(1000).eat("apple");
