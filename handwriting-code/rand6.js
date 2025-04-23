function rand4() {
  // 使用 Math.random() 生成 [0, 1) 的随机数
  // 乘以 5 并向下取整，得到 0-4 的随机整数
  return Math.floor(Math.random() * 5);
}

function rand6() {
  while (true) {
    // 使用两次 rand4 来构造一个更大的随机数范围
    // 第一次 rand4() * 5 可以得到 0,5,10,15,20
    // 加上第二次 rand4() 可以得到 0-24 范围内的均匀分布
    const result = rand4() * 5 + rand4();

    // 我们只需要前 21 个数字(0-20)，因为它们可以被均匀地映射到 0-6
    if (result < 21) {
      // 将 0-20 映射到 0-6
      return Math.floor(result / 3);
    }
    // 如果生成的数字大于 20，则重新生成
    // 这样可以保证等概率
  }
}

for (let i = 0; i < 50; i++) {
  console.log(rand6());
}
