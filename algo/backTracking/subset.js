function subset(nums) {
  const size = nums.length;
  const path = [];
  const res = [];
  function dfs(begin, nums, size, path, res) {
    res.push([...path])
    for (let i = begin; i < size; i++) {
      path.push(nums[i])
      dfs(i + 1, nums, size, path, res)
      path.pop();
    }
  }
  dfs(0, nums, size, path, res);
  return res;
}

const nums = [1, 2, 3]
console.log(subset(nums))