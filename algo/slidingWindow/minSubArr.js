// 207 滑动窗口
var minSubArrayLen = function (target, nums) {
  let start = end = sum = 0;
  let min = Infinity;
  while (end < nums.length) {
    sum += nums[start];
    while (sum >= target) {
      sum -= nums[start];
      start++;
      min = Math.min(min, end - start + 1)
    }
    end++;
  }
  return min
};

const target = 7;
const nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLen(target, nums))