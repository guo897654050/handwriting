function combinationSum(candidates, target) {
  const size = candidates.length;
  const path = [];
  const res = [];
  let begin = 0;
  function sumK(nums) {
    return nums.reduce((prev, curr) => prev + curr, 0)
  }
  function dfs(begin, candidates, path, res) {
    if (sumK(path) === target) {
      res.push([...path])
      return
    }

    if (sumK(path) > target) {
      return
    }

    for (let i = begin; i < size; i++) {
      path.push(candidates[i]);
      dfs(i, candidates, path, res);
      path.pop();
    }
  }
  dfs(begin, candidates, path, res);
  return res;
};

console.log(combinationSum([2, 3, 5], 8))