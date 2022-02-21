function lengthOfLIS(nums) {
  // 以nums[i]结尾的字长子序列
  let dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  return Math.max(...dp)
}

const nums = [4, 10, 4, 3, 8, 9]

console.log(lengthOfLIS(nums))