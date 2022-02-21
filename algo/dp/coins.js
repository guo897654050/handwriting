function coins(coins, amount) {
  const n = coins.length;
  const dp = new Array(n + 1).fill(Infinity).map(() => new Array(amount + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    const num = coins[i - 1]
    for (let j = 0; j <= amount; j++) {
      if (j < num) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - num] + 1)
      }
    }
  }
  if (dp[n][amount] === Infinity) return -1
  return dp[n][amount]
}
const num = [2, 1, 5]
console.log(coins(num, 11))


/**
 * 
 * @param {array} coins 
 * @param {number} amount 
 * 滚动数组使用一维dp
 */
function coins2(coins, amount) {
  const n = coins.length;
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    const num = coins[i - 1];
    for (let j = 0; j <= amount; j++) {
      if (j >= num) {
        dp[j] = Math.min(dp[j], dp[j - num] + 1)
      }
    }
  }
  if (dp[amount] === Infinity) return -1
  return dp[amount]
}
console.log(coins2(num, 11))