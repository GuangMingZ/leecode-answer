class Publisher {
  constructor() {
    this.listener = {};
  }

  addListener(eventName, callback) {
    if (!this.listener[eventName]) {
      this.listener[eventName] = [];
    }
    this.listener[eventName].push(callback);
  }

  addListenerOnce(eventName, callback) {
    const finalCb = (...rest) => {
      this.removeListener(eventName, callback);
      callback.apply(this, rest);
    };
    finalCb.fn = callback;
    this.addListener(eventName, finalCb);
  }

  removeListener(eventName, callback) {
    if (!eventName) {
      this.listener = {};
    }
    if (!callback) {
      this.listener[eventName] = [];
    }
    const cbArr = this.listener[eventName];
    const index = cbArr.findIndex(
      (cb) => cb === callback || cb.fn === callback
    );
    if (index > -1) {
      cbArr.splice(index, 1);
    }
  }

  emitEvent(eventName, data) {
    const cbArr = this.listener[eventName];
    cbArr?.forEach((cb) => cb(data));
  }
}

const emiter = new Publisher();
emiter.addListener("log", () => {
  console.log(111);
});
emiter.addListener("log", () => {
  console.log(222);
});
emiter.addListenerOnce("log1", () => {
  console.log(333);
});
emiter.emitEvent("log");
emiter.emitEvent("log1");
emiter.emitEvent("log1");
