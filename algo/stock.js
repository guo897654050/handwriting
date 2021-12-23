const stockTrade = (prices) => {
  // 记录利润
  const dp = new Array(prices.length).fill(0);
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
  }
  return dp[prices.length - 1]
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(stockTrade(prices))