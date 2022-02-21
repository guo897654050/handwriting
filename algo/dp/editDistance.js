var minDistance = function (word1, word2) {
  // m行n列
  let m = word1.length + 1;
  let n = word2.length + 1;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = i;
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = i;
  }
  console.log(dp)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
      }
    }
  }
  console.log(dp)
  return dp[m - 1][n - 1]
};


const world1 = 'horse'
const world2 = 'ros'
console.log(minDistance(world1, world2))