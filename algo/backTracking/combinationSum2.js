function combinationSum2(candidates, target) {
  const size = candidates.length;
  const path = [];
  const res = [];
  let begin = 0;
  function sumK(path) {
    return path.reduce((prev, curr) => prev + curr, 0)
  }
  function dfs(begin, candidates, path, res) {
    if (sumK(path) === target) {
      res.push([...path]);
      return
    }
    if (sumK(path) > target) {
      return
    }
    for (let i = begin; i < size; i++) {
      if (i > begin && candidates[i] === candidates[i - 1]) {
        console.log('i', i, 'begin', begin)
        continue

      }
      path.push(candidates[i]);
      dfs(i + 1, candidates, path, res);
      path.pop();
    }
  }
  candidates.sort((a, b) => a - b)
  dfs(begin, candidates, path, res);
  return res;
}


console.log(combinationSum2([2, 5, 2, 1, 2], 5))