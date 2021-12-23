const waterKing = (nums) => {
  // 树立候选人和血量
  let candidate = 0;
  let restHp = 0;
  for (let num of nums) {
    if (restHp === 0) {
      candidate = num;
      restHp++;
    } else if (num !== candidate) {
      restHp--;
    } else {
      restHp++;
    }
  }
  if (restHp === 0) {
    // 无水王数
    return -1;
  }
  let count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++
    }
  }
  // 如果出现次数大于一半
  if (count > Math.floor(nums.length >> 1)) {
    return candidate
  } else {
    return -1;
  }
}
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let nums2 = [1, 2, 3, 3, 3, 3, 6];
console.log(waterKing(nums1));
console.log(waterKing(nums2))