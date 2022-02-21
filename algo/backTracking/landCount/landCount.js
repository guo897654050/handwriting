function landCount(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        dfs(matrix, i, j);
        count++
      }
    }
  }


  function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return
    if (grid[i][j] !== 1) return
    grid[i][j] = 2
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  }
  return count

}


const matrix = [
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0],
]
console.log(landCount(matrix))