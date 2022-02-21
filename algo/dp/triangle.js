function minimumTotal(nums) {
  let n = nums.length;
  let f = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  f[0][0] = nums[0][0];
  for (let i = 1; i < n; i++) {
    f[i][0] = f[i - 1][0] + nums[i][0];
    for (let j = 1; j < i; j++) {
      f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + nums[i][j]
    }
    f[i][i] = f[i - 1][i - 1] + nums[i][i]
  }
  let minTotal = f[n - 1][0];
  for (let i = 1; i < n; i++) {
    minTotal = Math.min(minTotal, f[n - 1][i])
  }
  return minTotal
}

const nums = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
console.log(minimumTotal(nums))