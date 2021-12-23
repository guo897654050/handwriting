// 给一个有重复的数字的数组，输出不同的全排列
function permuteUnique(nums) {
  const size = nums.length;
  const path = [];
  const res = [];
  const used = new Array(size).fill(false);
  let depth = 0;

  function dfs(nums, depth, size, path, used, res) {
    // stop
    if (path.length === size) {
      res.push([...path]);
      return
    }
    for (let i = 0; i < size; i++) {
      if (!used[i]) {
        if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
          continue
        }
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, depth + 1, size, path, used, res);
        used[i] = false;
        path.pop();
      }
    }
  }
  nums.sort((a, b) => a - b)
  dfs(nums, depth, size, path, used, res);
  return res
}

const nums = [1, 2, 2]
console.log(permuteUnique(nums))