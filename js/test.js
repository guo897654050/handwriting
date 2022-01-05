function test(nums) {
  let res = [];
  let path = [];
  let begin = 0;
  let size = nums.length;
  nums.sort((a, b) => a - b);
  function dfs(begin) {
    if (path.length === 3) {
      if (path[0] + path[1] > path[2]) {
        res.push([...path])
      }
      return
    }
    if (path.length > 3) return
    for (let i = begin; i < size; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  }
  dfs(begin);
  return res
}

const nums = [24, 3, 82, 22, 35, 84, 19]
console.log(test(nums))