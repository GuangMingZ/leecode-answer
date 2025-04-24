const sleep = (delay) =>
  new Promise((resolve) => setTimeout(() => resolve(), delay));

function concurrency(urls, limit) {
  const result = [];
  let count = 0;
  const len = urls.length;
  return new Promise((resolve) => {
    const next = () => {
      if (count === len) return resolve(result);

      let current = count++;
      fetch(urls[current])
        .then((res) => {
          result[current] = { result: res.data };
        })
        .catch((err) => {
          result[current] = { error: err };
        })
        .finally(() => {
          next();
        });
    };
    while (count < limit) {
      next();
    }
  });
}

/**
 * 伪线程方案
 * @param {*} urls
 * @param {*} limit
 */
async function concurrency1(urls, limit) {
  const next = async () => {
    while (urls.length) {
      await fetch(urls.pop(), {
        method: "get",
      })
        .then((res) => res.text())
        .then(() => {
          console.count();
        });
      // 制造延迟
      await sleep(800);
    }
  };

  await Promise.all(new Array(limit).fill(null).map(() => next()));
}

async function concurrency2(urls, limit) {
  let pool = [];
  while (urls.length) {
    if (pool.length < limit) {
      const task = fetch(urls.pop())
        .then(() => {
          console.count();
        })
        .finally(() => {
          pool.splice(pool.indexOf(task), 1);
        });
      pool.push(task);
    } else {
      await Promise.race(pool);
      // 制造延迟
      await sleep(800);
    }
  }
}

const urls = new Array(10).fill("https://www.baidu.com");

concurrency1([...urls], 3).then(console.log);
