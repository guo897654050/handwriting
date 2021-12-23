var merge = function (nums1, m, nums2, n) {
  // 从后往前插数据
  let k = m + n - 1;
  let len1 = m - 1;
  let len2 = n - 1;
  while (len2 >= 0) {
    console.log('len2', len2--)
    // console.log('k', nums1[k--])
    // nums1[len1] > nums2[len2] ? nums1[k--] = nums1[len1--] : nums1[k--] = nums2[len2--]
  }
};

nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [2, 5, 6,]
console.log(merge(nums1, 6, nums2, 3))