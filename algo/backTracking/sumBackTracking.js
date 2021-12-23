function sumBacktracking(nums, target) {
  function pathSum(path) {
    return path.reduce((prev, curr) => prev + curr, 0)
  }

  const size = nums.length;
  const path = [];
  const res = [];
  let begin = 0;
  function dfs(begin, nums, size, path, res) {
    // 递归终止
    if (pathSum(path) === target) {
      res.push([...path])
      return
    }
    if (pathSum(path) > target) {
      return
    }
    // 跳过已经选过的元素
    for (let i = begin; i < size; i++) {
      path.push(nums[i]);
      console.log('递归前', path)
      dfs(i, nums, size, path, res);
      console.log('递归后', path)
      path.pop();
    }
  }
  dfs(begin, nums, size, path, res);
  return res;
}

const nums = [2, 3, 5];
const target = 8;
console.log(sumBacktracking(nums, target))