function review(nums) {
  if (nums.length < 1) {
    return false
  }
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  const n = nums.length;
  const target = Math.floor(sum / 2);
  const dp = new Array(n).fill(false).map(() => new Array(target + 1).fill(false))
  dp[0][0] = true
  for (let i = 0; i <= target; i++) {
    if (nums[0] === i) {
      dp[0][i] = true
    }
  }
  for (let i = 1; i < n; i++) {
    let num = nums[i];
    for (let j = 0; j <= target; j++) {
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  console.log(dp)
  return dp[n - 1][target]
}

function canPartition(nums) {
  if (nums.length < 2) return false;
  const sumArr = (nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0)
  }
  if (sumArr(nums) % 2 !== 0) return false;
  const target = sumArr(nums) / 2;
  let n = nums.length;
  const dp = new Array(n).fill(false).map(() => new Array(target + 1).fill(false));
  dp[0][0] = true
  for (let j = 0; j <= target; j++) {
    if (dp[0][j] === nums[0]) {
      dp[0][j] = true
    }
  }

  for (let i = 1; i < n; i++) {
    const num = nums[i]
    for (let j = 0; j <= target; j++) {
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
    if (dp[i][target]) return true
  }
  console.log(dp)
  return dp[n - 1][target]
}

const nums = [1, 5, 11, 5]
console.log(canPartition(nums))