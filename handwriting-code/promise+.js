class MyPromise {
  static pending = "pending";
  static fulfilled = "fulfilled";
  static rejected = "rejected";

  constructor(executor) {
    if (typeof executor !== "function") {
      throw new Error("参数类型不正确，必须为Function类型");
    }
    this.promiseStatus = MyPromise.pending;
    this.promiseResult = null;
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      // Promise中有throw的话，就相当于执行了reject
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.promiseStatus !== MyPromise.pending) {
      return;
    }
    this.promiseStatus = MyPromise.fulfilled;
    this.promiseResult = value;
  }

  reject(reason) {
    if (this.promiseStatus !== MyPromise.pending) {
      return;
    }
    this.promiseStatus = MyPromise.rejected;
    this.promiseResult = reason;
  }

  then(onFulfilled, onRejected) {
    // 参数校验，确保一定是函数
    if (typeof onFulfilled !== "function") {
      onFulfilled = (val) => val;
    }
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }

    if (this.promiseStatus === MyPromise.fulfilled) {
      onFulfilled(this.promiseResult);
    } else if (this.promiseStatus === MyPromise.rejected) {
      onRejected(this.promiseResult);
    }
  }
}
