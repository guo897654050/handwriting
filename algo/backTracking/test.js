let names = ["iPhone X", "iPhone XS"]

let colors = ["黑色", "白色"]

let storages = ["64g", "256g"]

// const concatArr = names.concat(colors, storages)
let reArr = colors.concat(storages);


function getRes(chunk) {
  const last = chunk.length - 1;
  const res = [];
  function dfs(index, prev) {
    const chunkItem = chunk[index];
    for (let item of chunkItem) {
      const cur = prev.concat(item);
      if (index === last) {
        res.push(cur)
      } else {
        dfs(index + 1, cur);
      }
    }
  }

  dfs(0, []);
  return res;
}
const chunk = [["iPhone X", "iPhone XS"], ["黑色", "白色"], ["64g", "256g"]]

console.log(getRes(chunk))