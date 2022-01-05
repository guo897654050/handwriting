function combine(n, k) {
  const nums = new Array(n).fill(false).map((_, index) => index + 1)
  const size = nums.length;
  let depth = 0;
  let path = [];
  let res = [];
  let begin = 0;
  function dfs(begin, nums, depth, size, path, res) {
    //递归终止
    if (depth === k) {
      res.push([...path])
      return
    }
    for (let i = begin; i < size; i++) {
      path.push(nums[i]);
      dfs(i + 1, nums, depth + 1, size, path, res);
      path.pop();
    }
  }
  dfs(begin, nums, depth, size, path, res);
  return res;
}

const n = 4;
const k = 2;
console.log(combine(n, k))