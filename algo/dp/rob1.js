var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return Math.max(...dp)
};

const nums = [2, 1, 1, 2];
console.log(rob(nums))