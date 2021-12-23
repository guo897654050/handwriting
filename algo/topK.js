function findTopK(nums, k) {
  let heapSize = nums.length;
  buildHeap(nums, heapSize)
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

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findTopK(nums, k))