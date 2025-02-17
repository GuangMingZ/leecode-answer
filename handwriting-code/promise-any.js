/**
 * Promise.any 接收一个 Promise 数组作为输入，只要其中任何一个 Promise 成功解决，
 * 它就返回一个新的 Promise，该 Promise 解决为第一个成功解决的 Promise 的值。
 * 如果所有的 Promise 都失败，则返回的 Promise 将被拒绝，
 * 并带有 AggregateError 类型的错误，该错误包含所有失败的 Promise 的错误。
 */
Promise.any = function (promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let resolved = false;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          if (!resolved) {
            resolved = true;
            resolve(value);
          }
        })
        .catch((error) => {
          errors[index] = error;
          if (errors.length === promises.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
};
