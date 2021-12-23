var generateParenthesis = function (nums) {
  let size = nums.length;
  let depth = 0;
  let path = [];
  let used = new Array(size).fill(false);
  let res = [];
  function dfs(nums, size, depth, path, used, res) {
    if (depth === size) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < size; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        console.log('递归之前=>', path)
        dfs(nums, size, depth + 1, path, used, res);
        used[i] = false;
        path.pop();
        console.log('递归之后=>', path)
      }
    }
  }
  dfs(nums, size, depth, path, used, res);
  return res;
};
console.log(generateParenthesis([1, 2, 3]))