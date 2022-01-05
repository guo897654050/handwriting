function generateParenthesis(n) {
  let left = n;
  let right = n;
  let path = '';
  let res = [];

  function dfs(path, left, right,) {
    if (left === 0 && right === 0) {
      res.push(path);
      return;
    }
    // 左括号大于有括号数量剪枝
    if (left > right) {
      return
    }
    if (left > 0) {
      dfs(path + '(', left - 1, right);
    }
    if (right > 0) {
      dfs(path + ')', left, right - 1);
    }
  }
  dfs(path, left, right);
  return res
}
console.log(generateParenthesis(3))