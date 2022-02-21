function subarraysWithKDistinct(nums, k) {
  let len = nums.length;
  let l = r = 0;
  let freq = new Array(len + 1).fill(0);
  let count = 0;
  while (r < len) {
    if (freq[nums[r]] === 0) {
      count++;
    }
    freq[nums[r]]++;
    r++;
  }
};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))