function pack(weights, values, w) {
  const n = weights.length;
  let fn = [[]];
  for (let j = 0; j <= w; j++) {
    if (j < weights[0]) {
      fn[0][j] = 0
    } else {
      fn[0][j] = values[0]
    }
  }
  for (let j = 0; j <= w; j++) {
    for (let i = 1; i < n; i++) {
      if (!fn[i]) {
        fn[i] = []
      }
      if (j < weights[i]) {
        fn[i][j] = fn[i - 1][j]
      } else {
        fn[i][j] = Math.max(fn[i - 1][j], fn[i - 1][j - weights[i]] + values[i])
      }
    }
  }
  return fn[n - 1][w]
}
var a2 = review([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10)
console.log(a2)

function review(weight, values, w) {
  const n = weight.length;
  const dp = [[]];
  for (let j = 0; j <= w; j++) {
    if (j < weight[0]) {
      dp[0][j] = 0
    } else {
      dp[0][j] = values[0]
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      if (!dp[i]) {
        dp[i] = []
      }
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + values[i])
      }
    }
  }
  return dp[n - 1][w]
}