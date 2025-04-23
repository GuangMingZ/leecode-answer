// 调用方式
// resolve, reject是Promise内部的方法，暴露到了外部，resolve跟reject可以用到改变Promise的内部状态
// onFullFilled, onRejected是用户自定义的方法，用来分别处理正确的value跟异常的reason
new Promise((resolve, reject) => {
  if (a) {
    resolve(true);
  } else {
    reject(false);
  }
}).then(onFullFilled, onRejected);


class Promise {
  static pending = "pending";
  static fulfilled = "fulfilled";
  static rejected = "rejected";

  constructor(executor) {
    this.status = Promise.pending;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === Promise.pending) {
        this.status = Promise.fulfilled;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (this.status === Promise.pending) {
        this.status = Promise.rejected;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    if (typeof executor !== "function") {
      throw new TypeError("参数类型不正确，必须为Function类型");
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === Promise.fulfilled) {
      onFulfilled(this.value);
    }

    if (this.status === Promise.rejected) {
      onRejected(this.reason);
    }

    if (this.status === Promise.pending) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
