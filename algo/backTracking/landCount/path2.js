var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  let obstacle = [];
  for (let i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacle.push([i, j])
      }
    }
  }
  const offset = [[0, 1], [1, 0]];
  let res = 0;
  function dfs(i, j) {
    if (i >= row || j >= col) return 0;
    if (obstacle.some((item) => item[0] === i && item[1] === j)) {
      return;
    }
    if (i === row - 1 && j === col - 1) {
      res += 1
    }
    for (let index = 0; index < 2; index++) {
      const newx = i + offset[index][0];
      const newy = j + offset[index][1];
      dfs(newx, newy);
    }
  }
  dfs(0, 0)
  return res
};

const a = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
const b = [[0, 1], [0, 0]]
console.log(uniquePathsWithObstacles(b))