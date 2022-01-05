// 暴力解法 o(n*n)
// function lengthOfLongestSubstring(s) {
//   let path = [];
//   for (let i = 0; i < s.length; i++) {
//     let tmp = [s.charAt(i)]
//     for (let j = i + 1; j < s.length; j++) {
//       if (!tmp.includes(s.charAt(j))) {
//         tmp.push(s.charAt(j))
//       } else {
//         break
//       }
//     }
//     path.push(tmp)
//   }
//   const res = [...new Set(path.map((item) => item.join('')))]
//     .map((item) => item.split(''));
//   let max = 0;
//   for (let item of res) {
//     if (item.length > max) {
//       max = item.length
//     }
//   }
//   return max
// }

// 使用滑动窗口
// 对于重复问题，第一时间想到set结构
function lengthOfLongestSubstring(s) {
  let start = end = max = 0;
  let set = new Set();
  while (end < s.length) {
    if (!set.has(s[end])) {
      set.add(s[end++]);
      max = Math.max(max, set.size)
    } else {
      set.delete(s[start++])
    }
  }
  return max
}

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s))