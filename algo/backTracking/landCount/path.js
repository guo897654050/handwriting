var uniquePaths = function (m, n) {
  let res = 0;
  const offset = [[0, 1], [1, 0]]
  function dfs(row, col) {
    if (row >= m || col >= n) return 0;
    if (row === m - 1 && col === n - 1) {
      res += 1;
    }

    // return dfs(row + 1, col) + dfs(row, col + 1)
    for (let index = 0; index < 2; index++) {
      dfs(row + offset[index][0], col + offset[index][1])
    }
  }
  dfs(0, 0);
  return res;
};

console.log(uniquePaths(3, 3))