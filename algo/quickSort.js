function findTopK(nums, k) {
  let heapSize = nums.length;
  buildHeap(nums, heapSize);
  console.log(nums)
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i);
    --heapSize;
    maxHeap(nums, 0, heapSize)
  }
  return nums[0]
  function buildHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      maxHeap(nums, i, heapSize)
    }
  }
  function maxHeap(nums, i, heapSize) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < heapSize && nums[l] > nums[largest]) {
      largest = l;
    }
    if (r < heapSize && nums[r] > nums[largest]) {
      largest = r;
    }
    if (largest !== i) {
      swap(nums, i, largest);
      maxHeap(nums, largest, heapSize)
    }
  }

  function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
const a = [7, 2, 1, 3, 6, 5, 4]
console.log(findTopK(a, 2))