#### 二分查找
1. 判定一律使用while(l < r)，如果找一个递增数组的中间一个数字
   - nums为偶数，那么最终会有l=r=mid
   - nums为奇数，l = mid -1, r = mid + 1, mid为要找的数字