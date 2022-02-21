function landArea(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        let count = dfs(matrix, i, j);
        res.push(count)
      }
    }
  }
  return Math.max(...res)

  function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 0;
    if (grid[i][j] !== 1) return 0;
    grid[i][j] = 2;
    return 1 + dfs(grid, i - 1, j) +
      dfs(grid, i + 1, j) +
      dfs(grid, i, j - 1) +
      dfs(grid, i, j + 1)
  }
}

const matrix = [
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0],
]
console.log(landArea(matrix))