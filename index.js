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
