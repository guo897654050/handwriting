function letterCombinations(digits) {
  const map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const size = digits.length;
  if (size === 0) return [];
  let res = [];
  let path = '';
  let depth = 0;
  function dfs(depth, path) {
    console.log('path', path)
    if (depth === size) {
      res.push(path);
      return
    }
    const nextStr = map[digits[depth] - 2];
    for (let i = 0; i < nextStr.length; i++) {
      dfs(depth + 1, path + nextStr[i]);
    }
  }
  dfs(depth, path);
  return res;
}
// console.log(letterCombinations('23'))

// 模仿数组方法
function letterCombinations(digits) {
  const map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const size = digits.length;
  if (!size) return [];
  let path = [];
  let res = [];
  let depth = 0;
  let begin = 0;
  function dfs(begin, depth) {
    if (depth === size) {
      res.push([...path]);
      return
    }
    for (let i = begin; i < size; i++) {
      const nums = map[digits[i] - 2];
      for (let j = 0; j < nums.length; j++) {
        path.push(nums[j]);
        dfs(i + 1, depth + 1)
        path.pop();
      }
    }
  }

  dfs(begin, depth);
  return res;
}

console.log(letterCombinations('23'))
