// 如何理解返回left,限于没找到target的情况,最终出现的情况如下
// 1. [1,3], target = 2， 最后一次循环时，l = r = mid =1, 由于nums[mid] > target, r = mid - 1, 此时返回left对的
// 2. [1,2], target = 3，最后一次循环时，l = r = mid = 1, 由于nums[mid] < target, l = mid + 1, 此时返回left是对的
function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l
};

const nums = [1, 3, 5, 6];
const target = 2;
console.log(searchInsert(nums, target))