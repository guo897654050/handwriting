function subset2(nums) {
  const size = nums.length;
  const path = [];
  const res = [];
  function dfs(begin, nums, size, path, res) {
    res.push([...path])
    for (let i = begin; i < size; i++) {
      if (i > begin && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i]);
      dfs(i + 1, nums, size, path, res);
      path.pop();
    }
  }
  dfs(0, nums, size, path, res);
  return res;
}

const nums = [1, 2, 2];
console.log(subset2(nums));