function threeSum(nums) {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  const data = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return data;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      if (nums[i] + nums[L] + nums[R] === 0) {
        while (nums[L] === nums[L + 1]) {
          L++
        }
        while (nums[R] === nums[R - 1]) {
          R--
        }
        data.push([nums[i], nums[L], nums[R]])
        L++;
        R--;
      } else if (nums[i] + nums[L] + nums[R] < 0) {
        L++
      } else {
        R--
      }
    }
  }
  return data;
}

const nums = [-2, 0, 0, 2, 2]
console.log(threeSum(nums))