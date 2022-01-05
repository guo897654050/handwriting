function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        [nums[j], nums[i]] = [nums[i], nums[j]]
      }
    }
  }
  return nums;
}

console.log(bubbleSort([5, 8, 6, 3, 1, 6, 7]))