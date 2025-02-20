/**
 * @param {number} n
 * @return {string[]}
 * 
 * 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
answer[i] == "Fizz" 如果 i 是 3 的倍数。
answer[i] == "Buzz" 如果 i 是 5 的倍数。
answer[i] == i （以字符串形式）如果上述条件全不满足。

思路：
直接根据数字特性，构造出3的倍数集合，5的倍数集合，3x5的倍数集合，把集合合并到一起，
然后顺序生成长度为 n 字符串数组

好处：内存占用更少
 */
var fizzBuzz = function (n) {
  const three = [];
  const five = [];
  const threeFive = [];
  const threeFiveMap = new Map();
  let temp = 15;
  while (temp <= n) {
    threeFive.push(temp);
    threeFiveMap.set(temp, 1);
    temp += 15;
  }
  temp = 3;
  while (temp <= n) {
    if (!threeFiveMap.has(temp)) {
      three.push(temp);
    }
    temp += 3;
  }
  temp = 5;
  while (temp <= n) {
    if (!threeFiveMap.has(temp)) {
      five.push(temp);
    }
    temp += 5;
  }
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i === three[0]) {
      res.push("Fizz");
      three.shift();
    } else if (i === five[0]) {
      res.push("Buzz");
      five.shift();
    } else if (i === threeFive[0]) {
      res.push("FizzBuzz");
      threeFive.shift();
    } else {
      res.push(i.toString());
    }
  }
  return res;
};

// console.log(fizzBuzz(4));
// console.log(fizzBuzz(13));
console.log(fizzBuzz(100));
