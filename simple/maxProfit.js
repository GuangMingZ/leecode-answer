/**
 * @param {number[]} prices
 * @return {number}
 * 121. 买卖股票的最佳时机
 */
var maxProfit = function (prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }
  let minPrice = prices[0];
  let max = 0;
  for (let i = 1, n = prices.length; i < n; i++) {
    max = Math.max(max, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return max;
  //   if (!prices || prices.length <= 1) {
  //     return 0;
  //   }
  //   let max = 0,
  //     start = 0;
  //   let originPrice = prices[start];
  //   while (start < prices.length) {
  //     if (prices[start + 1] < prices[start]) {
  //       max += prices[start] - originPrice;
  //       console.log(max)
  //       originPrice = prices[start + 1];
  //     }
  //     start++;
  //   }
  //   return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
