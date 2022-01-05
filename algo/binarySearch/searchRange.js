//nums = [5,7,7,8,8,10], target = 8
// 寻找第 1 次出现的元素，下一次搜索的区间是 [left, mid]，设置 right = mid；
// 寻找最后 1 次出现的元素，下一次搜索的区间是 [mid, right]，设置 left = mid。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findFirstPosition(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      if (nums[mid] > target) {
        r = mid - 1;
      } else if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] === target) {
        r = mid
      }
    }
    if (nums[l] === target) return l;
    return -1;
  }

  function findLastPosition(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      console.log('l:', l);
      console.log('r:', r)
      const mid = l + Math.floor((r - l + 1) / 2);
      if (nums[mid] > target) {
        r = mid - 1;
      } else if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[mid] === target) {
        l = mid;
      }
    }
    return l
  }
  const l = findFirstPosition(nums, target);
  if (l === -1) return [-1, -1];
  const r = findLastPosition(nums, target)
  return [l, r]
};
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target))