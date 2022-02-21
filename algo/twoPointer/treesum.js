var threeSum = function (nums) {
  // 双指针
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        if (nums[l] === nums[l + 1]) {
          l++;
        }
        if (nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        l++
      }
    }
  }
  return res;
};

const nums = [-2, 0, 1, 1, 2];
console.log(threeSum(nums))