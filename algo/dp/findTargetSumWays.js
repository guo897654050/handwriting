function findTargetSumWays(nums, target) {
  let count = 0
  function dfs(pos, target) {
    if (pos === nums.length) {
      if (target === 0) {
        count++
        return
      }
    } else {
      dfs(pos + 1, target + nums[pos]);
      dfs(pos + 1, target - nums[pos]);
    }
  }
  dfs(0, target);
  return count
}

const num = [1, 1, 1, 1, 1]
console.log(findTargetSumWays(num, 3))


function findTargetSumWaysDp(nums, target) {
  let sum
  sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (Math.abs(target) > sum) return 0;
  const n = nums.length;
  const m = sum * 2 + 1
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
  // init
  dp[0][sum + nums[0]] += 1;
  dp[0][sum - nums[0]] += 1;

  for (let i = 1; i < n; i++) {
    for (let j = -sum; j <= sum; j++) {
      if (j + nums[i] > sum) {
        dp[i][j + sum] = dp[i - 1][j - nums[i] + sum] + 0;
      } else if (j - nums[i] < -sum) {
        dp[i][j + sum] = dp[i - 1][j + nums[i] + sum] - 0;
      } else {
        dp[i][j + sum] = dp[i - 1][j + nums[i] + sum] + dp[i - 1][j - nums[i] + sum]
      }
    }
  }
  console.log(dp)
  return dp[n - 1][sum + target]
}

console.log(findTargetSumWaysDp(num, 3))
