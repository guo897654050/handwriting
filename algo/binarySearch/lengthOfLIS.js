function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(dp)
  let res = 0;
  for (let ans of dp) {
    if (ans > res) {
      res = ans
    }
  }
  return res
}

const nums = [1, 2, 3, 4, 10, 2, 3, 4, 5, 6, 7];
console.log(lengthOfLIS(nums))