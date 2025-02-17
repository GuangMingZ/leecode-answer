/**
 * Promise.all 接收一个 Promise 数组作为输入，但它只有在所有的 Promise 都成功解决时，
 * 才返回一个新的 Promise，该 Promise 解决为一个包含所有解决值的数组。
 * 如果任何一个 Promise 失败，
 * 则返回的 Promise 将被拒绝，并带有第一个失败的 Promise 的错误。
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let remaining = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          remaining--;
          if (remaining === 0) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
