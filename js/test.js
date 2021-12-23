const data = [[1, 2], [2, 3], [2, 4], [3, 5], [4, 6]];
const res = [data[0]];
for (let i = 1; i < data.length; i++) {
  if (data[i][0] === res[res.length - 1][1]) {
    res.push(data[i])
  }
}
console.log(res)